"use strict";

class BitField {
  constructor(value = 0) {
    if (!(Number.isInteger(value))) {
      throw new TypeError("Error: Bit field should be an integer number");
    }
    this.v = value;
    
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
        throw new TypeError("Error: StartBit and EndBit fields (second and third parameters) should be integers");
      } else {
        v = f(n);
      }
      this.v = v;
      return this;
    };
    this._on = n => this.v |= this.mask(n);
    this._off = n => this.v &= ~this.mask(n);
    this._switch = n => this.v ^= this.mask(n);
    
    //public
    this.mask = n => {
      if (!(Number.isInteger(n))) {
        throw new TypeError("Error: Bit position should be an integer number");
      }
      return 1 << n;
    }
    this.bit = n => this.v & this.mask(n);
    this.on = (n, e = null) => this._op(this._on, this.v, n, e);
    this.off = (n, e = null) => this._op(this._off, this.v, n, e);
    this.switch = (n, e = null) => this._op(this._switch, this.v, n, e);
    this.get = () => this.v;
    this.set = v => {
      this.v = v;
      return this;
    }
  }
}

module.exports = BitField;
