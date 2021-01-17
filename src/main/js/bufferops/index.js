"use strict";

//static buffer operations container
class BufferOps {
/**
   * vInt function calculates length, value and uint8 buffer of variable-length integer
   *
   * @param {Array} buffer stream buffer or string that contains variable-length integers of EBML stream or file
   * @param {number} offset buffer index of the first byte of the variable-length integer
   * @return {{start: number, length: number, buffer: Array.<*>, value: *}} {offset, length, value buffer, value}
   * **/
  static vInt(buffer, offset = 0) {
    let bytes = 0;
    //noinspection StatementWithEmptyBodyJS
    while (!buffer[offset + bytes++]) ; //bytes with vInt descriptor
    let
      firstByte = offset + bytes - 1, //index of byte with alignment part of vInt data
      vIntAlignmentLength = Math.floor(Math.log2(buffer[firstByte])),
      vIntFullLength = 8 * bytes - vIntAlignmentLength, // vInt full length in bytes === number of bits of vInt descriptor
      valueBuffer = buffer.slice(firstByte, firstByte + vIntFullLength - bytes + 1);
    valueBuffer[0] = valueBuffer[0] & (Math.pow(2, vIntAlignmentLength) - 1);
    // valueBuffer[0] = valueBuffer[0] & (Math.pow(2, 8 - vIntFullLength + (bytes - 1) * 8) - 1);
    return {
      start: offset,//firstByte,
      length: vIntFullLength,
      buffer: valueBuffer,
      hexString: this.bigEndian(valueBuffer)
    }
    //todo>> the alternative ways to calculate length should be considered
    // const value = parseInt(this.bigEndian(offset, bytes, buffer), 16); //value in descriptor
    // return Math.ceil(Math.log2(-(1 + ~(1 << bytes * 8)) / value)); //length of vInt
    // One more way to calculate length is using javascript Math.clz32(first4bytes)
    // let length2 = 8 * (bytes - 1) + Math.clz32(buffer[firstByte]) - 23;
    //todo>> there is much much faster approach to get vInt length, this is the precalculated vector with 256 elements
    // This vector contains vectors with the length equal to the number of bytes of the length descriptor
    // each element of the last vector keeps a precalculated length of a vInt for that specific length of the vInt length descriptor
    // then a vInt could be expressed something like this: {let bytes=0; while(!buffer[bytes++]); return table256[buffer[bytes]][bytes];}
    // in that case current implementation of the vInt function could be used to precalculate table256 before beginning the parsing process
  }
  
  /**
   * bigEndian calculates a value from a buffer according to the big-endian order of bytes
   * @param {Array} buffer a stream buffer or string that contains variable-length integers of an EBML stream or file
   * @param {number} length the length of the value in bytes
   * @param {number} offset the buffer index of the first byte of the value
   * **/
  static bigEndian(buffer, length = buffer.length, offset = 0) {
    let exp = length - 1;
    if (offset + length > buffer.length) throw new Error(`Length out of buffer boundaries: ${length}`);
    return `0${buffer[offset].toString(16)}`.substr(-2) + (exp === 0 ? "" : this.bigEndian(buffer, exp, offset + 1));
  }
  
  // noinspection JSUnusedGlobalSymbols
  /**
   * littleEndian calculates a value from a buffer according to the little-endian order of bytes
   * @param {Array} buffer a stream buffer or string that contains variable-length integers of an EBML stream or file
   * @param {number} length the length of the value in bytes
   * @param {number} offset the buffer index of the first byte of the value
   * **/
  static littleEndian(buffer, length, offset = 0) {
    let exp = length - 1;
    if (offset + length > buffer.length) throw new Error(`Length out of buffer boundaries: ${length}`);
    return `0${buffer[offset + exp].toString(16)}`.substr(-2) + (exp === 0 ? "" : this.littleEndian(buffer, exp, offset));
  }
}

module.exports = Buffer;
