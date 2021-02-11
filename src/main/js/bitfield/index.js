"use strict";

// noinspection JSUnusedGlobalSymbols
class BitField {
  
  constructor(value = 0) {
    if (!(Number.isInteger(value))) {
      throw new TypeError("Error: Bit field should be an integer number");
    }
    this.value = value;
  }
  
  //private
  _op = (f, v, n, e = null) => {
    
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
  _on = n => this.value |= this.mask(n);
  _off = n => this.value &= ~this.mask(n);
  _switch = n => this.value ^= this.mask(n);
  
  //public
  get = () => this.value;
  set = v => {
    if (!(Number.isInteger(v))) {
      return this; // do nothing if v isn't a number
    }
    this.value = v;
    return this;
  };
  mask = n => {
    if (!(Number.isInteger(n))) {
      throw new TypeError("Error: Bit position should be an integer number");
    }
    return 1 << n;
  }
  bit = n => this.value & this.mask(n);
  on = (n, e = null) => this._op(this._on, this.value, n, e);
  off = (n, e = null) => this._op(this._off, this.value, n, e);
  switch = (n, e = null) => this._op(this._switch, this.value, n, e);
  off_rightmost1 = v => {
    this.value = v & (v - 1);
    return this;
  };
  on_rightmost0 = v => {
    this.value = v | (v + 1);
    return this;
  };
  isolate_rightmost1 = v => {
    this.value = v & (-v);
    return this;
  };
  isolate_rightmost0 = v => {
    this.value = ~v & (v + 1);
    return this;
  };
  
}

module.exports = BitField;
