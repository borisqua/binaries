"use strict";

const
  assert = require('assert').strict,
  BitOps = require('../../main/js/bitops')
;


describe('BitOps - Bit operations static functions library', () => {
  describe('BitOps.mask(n) - should return bit-mask with n-th bit set', () => {
    it('should return 1 when n=0 -> [..0001bin] = 1dec', () => {
      assert.equal(BitOps.mask(0)/*bit 0 set to 1*/, Number.parseInt('00001', 2));
    });
    it('should return 2 when n=1 -> [..0010bin] = 1dec', () => {
      assert.equal(BitOps.mask(1)/*bit 0 set to 1*/, Number.parseInt('00010', 2));
    });
    it('should return 4 when n=2 -> [..0100bin] = 1dec', () => {
      assert.equal(BitOps.mask(2)/*bit 0 set to 1*/, Number.parseInt('00100', 2));
    });
    it('should return 8 when n=3 -> [..1000bin] = 1dec', () => {
      assert.equal(BitOps.mask(3)/*bit 0 set to 1*/, Number.parseInt('01000', 2));
    });
    it('should return 16 when n=4 -> [.10000bin] = 1dec', () => {
      assert.equal(BitOps.mask(4)/*bit 0 set to 1*/, Number.parseInt('10000', 2));
    });
    it('should return an error if n is not a number', () => {
      assert.throws(() => BitOps.mask('a'), {"name": "TypeError"});
    });
  });
  describe('BitOps.check(n, v) - should return _true_ if n-th bit of v is set and _false_ otherwise', () => {
    it('should return false when n=0 and v=2 -> [..0001{0}bin]', () => {
      assert(!BitOps.check(2, 0), "first bit in 2dec=10bin shouldn't be set");
    });
    it('should return true when n=1 and v=2 -> [..000{1}0bin]', () => {
      assert(BitOps.check(2, 1), "second bit in 2dec=10bin should be set");
    });
    it('should return false when n=2 and v=2 -> [..00{0}10bin]', () => {
      assert(!BitOps.check(2, 2), "third bit in 2dec=010bin shouldn't be set");
    });
    it('should return an error if v is not a number', () => {
      assert.throws(() => BitOps.check('a', 0), {"name": "TypeError"});
    });
    it('should return an error if n is not a number', () => {
      assert.throws(() => BitOps.check(4, 'a'), {"name": "TypeError"});
    });
  });
  describe('BitOps.on(v, n) - should set n-th bit in bit-field v and return changed v', () => {
    it('should return 3 if set first bit in v=2', () => {
      assert.equal(BitOps.on(2, 0), Number.parseInt('00011', 2))
    });
    it('should return an error if v or n is not a number', () => {
      assert.throws(() => BitOps.on('a', 0), {"name": "TypeError"});
      assert.throws(() => BitOps.on(4, 'a'), {"name": "TypeError"});
    });
  });
  describe('BitOps.on(v, [n1,n2,...,nZ]) - should set all bits from array, in bit-field v and return changed v', () => {
    it('should return 19 if set bits 3 and 1 in v=1', () => {
      assert.equal(BitOps.on(1, [3, 1]), Number.parseInt('01011', 2));
      assert.equal(BitOps.on(1, [1, 3]), Number.parseInt('01011', 2));
    });
    it('should return an error if v is not a number', () => {
      assert.throws(() => BitOps.on('a', [1,3]), {"name": "TypeError"});
    });
    it('should return an error if n is not an array of integers', () => {
      assert.throws(() => BitOps.on(4, 'a'), {"name": "TypeError"});
    });
    it('should return an error if n one or more elements of the array is not integers', () => {
      assert.throws(() => BitOps.on(4, ['a', 2]), {"name": "TypeError"});
      assert.throws(() => BitOps.on(4, ['a', 'c']), {"name": "TypeError"});
      assert.throws(() => BitOps.on(4, [1, 'a', 'c']), {"name": "TypeError"});
    });
  });
  describe('BitOps.on(v, startBit, endBit) - should set all bits from start to end in bit-field v and return changed v', () => {
    it('should return 31 if set bits from 3 to 0 in v=16', () => {
      assert.equal(BitOps.on(16, 3, 0), Number.parseInt('11111', 2));
      assert.equal(BitOps.on(16, 3, 0), 31);
      assert.equal(BitOps.on(16, 0, 3), Number.parseInt('11111', 2));
      assert.equal(BitOps.on(16, 3, 0), 31);
    });
    it('should return an error if v is not a number', () => {
      assert.throws(() => BitOps.on('a', 0, 3), {"name": "TypeError"});
    });
    it('should return an error if startBit or endBit or both of them are not numbers', () => {
      assert.throws(() => BitOps.on(4, 'a', 3), {"name": "TypeError"});
      assert.throws(() => BitOps.on(4, 3, 'a'), {"name": "TypeError"});
      assert.throws(() => BitOps.on(4, 'a', 'b'), {"name": "TypeError"});
    });
    it('should return an error if v or startBit or endBit or any of them are not numbers', () => {
      assert.throws(() => BitOps.on('v', 'a', 3), {"name": "TypeError"});
      assert.throws(() => BitOps.on('v', 3, 'a'), {"name": "TypeError"});
      assert.throws(() => BitOps.on('v', 'a', 'b'), {"name": "TypeError"});
      assert.throws(() => BitOps.on('v', 'b', 'c'), {"name": "TypeError"});
    });
  });
  describe('BitOps.off(v, n) - should clear n-th bit in bit-field v and return changed v', () => {
    it('should return 2 if clear first bit in v=3', () => {
      assert.equal(BitOps.off(3, 0), Number.parseInt('00010', 2))
    });
    it('should return an error if v or n is not a number', () => {
      assert.throws(() => BitOps.off('a', 0), {"name": "TypeError"});
      assert.throws(() => BitOps.off(4, 'a'), {"name": "TypeError"});
    });
  });
  describe('BitOps.off(v, [n1,n2,...,nZ]) - should clear all bits from array, in bit-field v and return changed v', () => {
    it('should return 21 if clear bits 3 and 1 in v=31', () => {
      assert.equal(BitOps.off(31, [3, 1]), Number.parseInt('10101', 2));
      assert.equal(BitOps.off(31, [3, 1]), 21);
      assert.equal(BitOps.off(31, [1, 3]), Number.parseInt('10101', 2));
      assert.equal(BitOps.off(31, [3, 1]), 21);
    });
    it('should return an error if v is not a number', () => {
      assert.throws(() => BitOps.off('a', [1,3]), {"name": "TypeError"});
    });
    it('should return an error if n is not an array of integers', () => {
      assert.throws(() => BitOps.off(4, 'a'), {"name": "TypeError"});
    });
    it('should return an error if n one or more elements of the array is not integers', () => {
      assert.throws(() => BitOps.off(4, ['a', 2]), {"name": "TypeError"});
      assert.throws(() => BitOps.off(4, ['a', 'c']), {"name": "TypeError"});
      assert.throws(() => BitOps.off(4, [1, 'a', 'c']), {"name": "TypeError"});
    });
  });
  describe('BitOps.off(v, startBit, endBit) - should clear all bits from start to end in bit-field v and return changed v', () => {
    it('should return 16 if clear bits from 3 to 0 in v=31', () => {
      assert.equal(BitOps.off(31, 3, 0), Number.parseInt('10000', 2));
      assert.equal(BitOps.off(31, 3, 0), 16);
      assert.equal(BitOps.off(31, 0, 3), Number.parseInt('10000', 2));
      assert.equal(BitOps.off(31, 3, 0), 16);
    });
    it('should return an error if v is not a number', () => {
      assert.throws(() => BitOps.off('a', 0, 3), {"name": "TypeError"});
    });
    it('should return an error if startBit or endBit or both of them are not numbers', () => {
      assert.throws(() => BitOps.off(4, 'a', 3), {"name": "TypeError"});
      assert.throws(() => BitOps.off(4, 3, 'a'), {"name": "TypeError"});
      assert.throws(() => BitOps.off(4, 'a', 'b'), {"name": "TypeError"});
    });
    it('should return an error if v or startBit or endBit or any of them are not numbers', () => {
      assert.throws(() => BitOps.off('v', 'a', 3), {"name": "TypeError"});
      assert.throws(() => BitOps.off('v', 3, 'a'), {"name": "TypeError"});
      assert.throws(() => BitOps.off('v', 'a', 'b'), {"name": "TypeError"});
      assert.throws(() => BitOps.off('v', 'b', 'c'), {"name": "TypeError"});
    });
  });
  describe('BitOps.switch(v, n) - should switch n-th bit in bit-field v and return changed v', () => {
    it('should return 2 if switch first bit in v=3', () => {
      assert.equal(BitOps.switch(3, 0), Number.parseInt('00010', 2))
    });
    it('should return 3 if switch first bit in v=2', () => {
      assert.equal(BitOps.switch(2, 0), Number.parseInt('00011', 2))
    });
    it('should return an error if v or n is not a number', () => {
      assert.throws(() => BitOps.switch('a', 0), {"name": "TypeError"});
      assert.throws(() => BitOps.switch(4, 'a'), {"name": "TypeError"});
    });
  });
  describe('BitOps.switch(v, [n1,n2,...,nZ]) - should switch all bits from array, in bit-field v and return changed v', () => {
    it('should return 21 if switch bits 3 and 1 in v=31', () => {
      assert.equal(BitOps.switch(31, [3, 1]), Number.parseInt('10101', 2));
      assert.equal(BitOps.switch(31, [3, 1]), 21);
      assert.equal(BitOps.switch(31, [1, 3]), Number.parseInt('10101', 2));
      assert.equal(BitOps.switch(31, [3, 1]), 21);
    });
    it('should return 31 if switch bits 3 and 1 in v=21', () => {
      assert.equal(BitOps.switch(21, [3, 1]), Number.parseInt('11111', 2));
      assert.equal(BitOps.switch(21, [3, 1]), 31);
      assert.equal(BitOps.switch(21, [1, 3]), Number.parseInt('11111', 2));
      assert.equal(BitOps.switch(21, [3, 1]), 31);
      assert.equal(BitOps.switch(21, [1, 1]), Number.parseInt('10101', 2));
      assert.equal(BitOps.switch(21, [3, 3]), 21);
    });
    it('should return an error if v is not a number', () => {
      assert.throws(() => BitOps.switch('a', [1,3]), {"name": "TypeError"});
    });
    it('should return an error if n is not an array of integers', () => {
      assert.throws(() => BitOps.switch(4, 'a'), {"name": "TypeError"});
    });
    it('should return an error if n one or more elements of the array is not integers', () => {
      assert.throws(() => BitOps.switch(4, ['a', 2]), {"name": "TypeError"});
      assert.throws(() => BitOps.switch(4, ['a', 'c']), {"name": "TypeError"});
      assert.throws(() => BitOps.switch(4, [1, 'a', 'c']), {"name": "TypeError"});
    });
  });
  describe('BitOps.switch(v, startBit, endBit) - should switch all bits from start to end in bit-field v and return changed v', () => {
    it('should return 16 if switch bits from 3 to 0 in v=31', () => {
      assert.equal(BitOps.switch(31, 3, 0), Number.parseInt('10000', 2));
      assert.equal(BitOps.switch(31, 3, 0), 16);
      assert.equal(BitOps.switch(31, 0, 3), Number.parseInt('10000', 2));
      assert.equal(BitOps.switch(31, 3, 0), 16);
    });
    it('should return 31 if switch bits from 3 to 0 in v=16', () => {
      assert.equal(BitOps.switch(16, 3, 0), Number.parseInt('11111', 2));
      assert.equal(BitOps.switch(16, 3, 0), 31);
      assert.equal(BitOps.switch(16, 0, 3), Number.parseInt('11111', 2));
      assert.equal(BitOps.switch(16, 0, 3), 31);
      assert.equal(BitOps.switch(16, 0, 0), Number.parseInt('10001', 2));
      assert.equal(BitOps.switch(16, 0, 0), 17);
      assert.equal(BitOps.switch(16, 3, 3), Number.parseInt('11000', 2));
      assert.equal(BitOps.switch(16, 3, 3), 24);
    });
    it('should return an error if v is not a number', () => {
      assert.throws(() => BitOps.switch('a', 0, 3), {"name": "TypeError"});
    });
    it('should return an error if startBit or endBit or both of them are not numbers', () => {
      assert.throws(() => BitOps.switch(4, 'a', 3), {"name": "TypeError"});
      assert.throws(() => BitOps.switch(4, 3, 'a'), {"name": "TypeError"});
      assert.throws(() => BitOps.switch(4, 'a', 'b'), {"name": "TypeError"});
    });
    it('should return an error if v or startBit or endBit or any of them are not numbers', () => {
      assert.throws(() => BitOps.switch('v', 'a', 3), {"name": "TypeError"});
      assert.throws(() => BitOps.switch('v', 3, 'a'), {"name": "TypeError"});
      assert.throws(() => BitOps.switch('v', 'a', 'b'), {"name": "TypeError"});
      assert.throws(() => BitOps.switch('v', 'b', 'c'), {"name": "TypeError"});
    });
  });
  describe('BitOps.off_rightmost1(v) - should clear the rightmost set bit in the field v', () => {
    it('should return b11000 (d24) if the rightmost set bit will be turned off in the binary field b11100 (d28)', () => {
      assert.equal(BitOps.off_rightmost1(Number.parseInt('11100', 2)), Number.parseInt('11000', 2));
      assert.equal(BitOps.off_rightmost1(28), 24);
    });
  });
  describe('BitOps.on_rightmost1(v) - should set the rightmost clear bit in the field v', () => {
    it('should return b11011 (d27) if the rightmost set bit will be turned off in the binary field b11001 (d25)', () => {
      assert.equal(BitOps.on_rightmost0(Number.parseInt('11001', 2)), Number.parseInt('11011', 2));
      assert.equal(BitOps.on_rightmost0(25), 27);
    });
  });
  describe('BitOps.isolate_rightmost1(v) - should return binary field with only one set bit, one that was rightmost set in the field v', () => {
    it('should return b00100 (d4) if the rightmost set bit will be turned off in the binary field b11100 (d28)', () => {
      assert.equal(BitOps.isolate_rightmost1(Number.parseInt('11100', 2)), Number.parseInt('00100', 2));
      assert.equal(BitOps.isolate_rightmost1(28), 4);
    });
  });
  describe('BitOps.isolate_rightmost0(v) - should return binary field with only one set bit, one that was rightmost clear in the field v', () => {
    it('should return b00010 (d24) if the rightmost set bit will be turned off in the binary field b11001 (d28)', () => {
      assert.equal(BitOps.isolate_rightmost0(Number.parseInt('11101', 2)), Number.parseInt('00010', 2));
      assert.equal(BitOps.isolate_rightmost0(25), 2);
    });
  });
  describe('BitOps.right_propagate_rightmost1(v) - should return binary field with all bits set after rightmost set bit in the field v', () => {
    it('should return b00111 (d7) if the rightmost set bit will be turned off in the binary field b00100 (d4)', () => {
      assert.equal(BitOps.right_propagate_rightmost1(Number.parseInt('00100', 2)), Number.parseInt('00111', 2));
      assert.equal(BitOps.right_propagate_rightmost1(4), 7);
    });
  });
});

