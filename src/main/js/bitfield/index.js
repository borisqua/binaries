"use strict";

class BitField {
  
  constructor(value = 0) {
    if (!(Number.isInteger(value))) {
      throw new TypeError("Error: Bit field should be an integer number");
    }
    this.value = value;
    
    //private
    this._op = (f, n, e = null) => {
      if (n instanceof Array) {
        for (let i of n) {
          this.value = f(i);
        }
      } else if (Number.isInteger(n) && Number.isInteger(e)) {
        let
          start = Math.min(n, e),
          end = Math.max(n, e)
        ;
        for (let i = start; i <= end; i++) {
          this.value = f(i);
        }
      } else if (e !== null) {
        throw new TypeError("Error: StartBit and EndBit fields (the second and third parameters) should be integers, " +
          "instead you can use array or single value as second parameter");
      } else {
        this.value = f(n);
      }
      return this;
    };
    this._on = n => this.value |= this.mask(n);
    this._off = n => this.value &= ~this.mask(n);
    this._switch = n => this.value ^= this.mask(n);
    
    //public
    this.get = () => this.value;
    this.set = v => {
      if (!(Number.isInteger(v))) {
        throw new TypeError("Error: Bit field should be an integer number");
      }
      this.value = v;
      return this;
    };
    this.mask = n => {
      if (!(Number.isInteger(n))) {
        throw new TypeError("Error: Bit position should be an integer number");
      }
      return 1 << n;
    }
    this.bit = n => this.value & this.mask(n);
    this.on = (n, e = null) => this._op(this._on, n, e);
    this.off = (n, e = null) => this._op(this._off, n, e);
    this.switch = (n, e = null) => this._op(this._switch, n, e);
    this.off_rightmost1 = () => {
      this.value = this.value & (this.value - 1);
      return this;
    };
    this.on_rightmost0 = () => {
      this.value = this.value | (this.value + 1);
      return this;
    };
    this.isolate_rightmost1 = () => {
      this.value = this.value & (-this.value);
      return this;
    };
    this.isolate_rightmost0 = () => {
      this.value = ~this.value & (this.value + 1);
      return this;
    };
    this.right_propagate_rightmost1 = () => {
      this.value = this.value | (this.value - 1);
      return this;
    }
    
  }
  
}

module.exports = BitField;
