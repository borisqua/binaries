"use strict";

class BitField {
  constructor(value = 0) {
    this.v = value;
    //private
    this._op = (f, v, n, e = null) => {
      if (n instanceof Array) {
        for (let i of n) {
          v = f(i);
        }
      } else if (e) {
        for (let i = n; i <= e; i++) {
          v = f(i);
        }
      } else {
        v = f(n);
      }
      return v;
    };
    this._on = n => this.v |= this.mask(n);
    this._off = n => this.v &= ~this.mask(n);
    this._switch = n => this.v ^= this.mask(n);
    
    //public
    this.mask = n => 1 << n;
    this.check = n => !!(this.v & this.mask(n));
    this.bit = n => this.check() ? 1 : 0;
    this.on = (n, e = null) => this._op(this._on, this.v, n, e);
    this.off = (n, e = null) => this._op(this._off, this.v, n, e);
    this.switch = (n, e = null) => this._op(this._switch, this.v, n, e);
    this.get = () => this.v;
    this.set = v => this.v = v;
  }
}

module.exports = BitField;
