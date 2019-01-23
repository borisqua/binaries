"use strict";

class BitOps {
  
  //private
  static _op(f, v, n, e = null) {
    if (n instanceof Array) {
      for (let i of n) {
        v = f(v, i);
      }
    } else if (e) {
      for (let i = n; i <= e; i++) {
        v = f(v, i);
      }
    } else {
      v = f(v, n);
    }
    return v;
  };
  
  static _on(v, n) {
    return v | BitOps.mask(n);
  }
  
  static _off(v, n) {
    return v & ~BitOps.mask(n);
  }
  
  static _switch(v, n) {
    return v ^ BitOps.mask(n);
  }
  
  //public
  static mask(n) {
    return 1 << n;
  }
  
  static check(v, n) {
    return !!(v & BitOps.mask(n));
  }
  
  static get(v, n) {
    return BitOps.check ? 1 : 0;
  }
  
  static on(v, n, e = null) {
    return BitOps._op(BitOps._on, v, n, e);
  }
  
  static off(v, n, e = null) {
    return BitOps._op(BitOps._off, v, n, e);
  }
  
  static switch(v, n, e = null) {
    return BitOps._op(BitOps._switch, v, n, e);
  }
}

module.exports = BitOps;
