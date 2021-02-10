"use strict";

class BitField {
  constructor(value = 0) {
    if (!(Number.isInteger(value))) {
      throw new TypeError("Error: Bit field should be an integer number");
    }
    this.value = value;
    
    //private
    this._op = (f, v, n, e = null) => {
      if (n instanceof Array) {
        for (let i of n) {
          v = f(i);
        }
      } else if (Number.isInteger(n) && Number.isInteger(e)) {
        let
          start = Math.min(n, e),
          end = Math.max(n, e)
        ;
        for (let i = start; i <= end; i++) {
          v = f(i);
        }
      } else if (e !== null) {
        throw new TypeError("Error: StartBit and EndBit fields (the second and third parameters) should be integers, " +
          "instead you can use array or single value as second parameter");
      } else {
        v = f(n);
      }
      this.value = v;
      return this;
    };
    this._on = n => this.value |= this.mask(n);
    this._off = n => this.value &= ~this.mask(n);
    this._switch = n => this.value ^= this.mask(n);
    
    //public
    this.mask = n => {
      if (!(Number.isInteger(n))) {
        throw new TypeError("Error: Bit position should be an integer number");
      }
      return 1 << n;
    }
    this.bit = n => this.value & this.mask(n);
    this.on = (n, e = null) => this._op(this._on, this.value, n, e);
    this.off = (n, e = null) => this._op(this._off, this.value, n, e);
    this.switch = (n, e = null) => this._op(this._switch, this.value, n, e);
    this.off_rightmost1 = v => v & (v - 1);
    this.on_rightmost0 = v => v | (v + 1);
    this.isolate_rightmost1 = v => v & (-v);
    this.isolate_rightmost0 = v => ~v & (v + 1);
    this.get = () => this.value;
    this.set = v => {
      this.value = v;
      return this;
    }
  }
}

module.exports = BitField;
