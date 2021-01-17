"use strict";

class BitOps {
  
  //private
  static _op(f, v, n, e = null) {
    if (n instanceof Array) {
      for (let i of n) {
        v = f(v, i);
      }
    } else if (Number.isInteger(n) && Number.isInteger(e)) {
      let
        start = Math.min(n, e),
        finish = Math.max(n, e)
      ;
      for (let i = start; i <= finish; i++) {
        v = f(v, i);
      }
    } else if (e !== null) {
      throw new TypeError("Error: StartBit and EndBit fields (second and third parameters) should be integers");
    } else {
      v = f(v, n);
    }
    return v;
  };
  
  static _on(v, n) {
    if (!(Number.isInteger(v))) {
      throw new TypeError("Error: Bit field (first parameter) should be an integer number");
    }
    return v | BitOps.mask(n);
  }
  
  static _off(v, n) {
    if (!(Number.isInteger(v))) {
      throw new TypeError("Error: Bit field (first parameter) should be an integer number");
    }
    return v & ~BitOps.mask(n);
  }
  
  static _switch(v, n) {
    if (!(Number.isInteger(v))) {
      throw new TypeError("Error: Bit field (first parameter) should be an integer number");
    }
    return v ^ BitOps.mask(n);
  }
  
  //public
  static mask(n) {
    if (!(Number.isInteger(n))) {
      throw new TypeError("Error: Bit position should be an integer number");
    }
    return 1 << n;
  }
  
  static check(v, n) {
    if (!(Number.isInteger(v))) {
      throw new TypeError("Error: Bit field (first parameter) should be an integer number");
    }
    return v & BitOps.mask(n);
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
  
  static off_rightmost1(v) {
    return v & (v - 1);
  }
  
  static on_rightmost0(v) {
    return v | (v + 1);
  }
  
  static isolate_rightmost1(v) {
    return v & (-v);
  }
  
  static isolate_rightmost0(v) {
    return ~v & (v + 1);
  }
  
  static right_propagate_rightmost1(v) {
    return v | (v - 1);
  }
  
}

module.exports = BitOps;
