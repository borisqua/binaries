"use strict";

const
  BitField = require('../../main/js/bitfield'),
  bf = new BitField(15),
  BitOps = require('../../main/js/bitops')
;

console.log("BitOps static operations");
console.log(BitOps.on(0, 1));
console.log(BitOps.on(0, 4));
console.log(BitOps.off(255, 7));
console.log(BitOps.switch(255, 0, 7));
console.log(BitOps.switch(0, [0,2,4]));

console.log("A BitField object manipulations");
console.log(bf.get());
console.log(bf.bit(0));
console.log(bf.switch(0, 4));
console.log(bf.on(0, 4));
console.log(bf.off([0,2,4]));


