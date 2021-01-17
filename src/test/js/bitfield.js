"use strict";

const
  assert = require('assert').strict,
  BitField = require('../../main/js/bitfield'),
  bf = new BitField(21)
;

describe("BitField - Binary field object methods", () => {
  describe('BitField Instantiating: ', () => {
    it("new BitField() - should return BitField object", () => {
      assert(bf instanceof BitField);
    });
    it("new BitField('a') - should throw TypeError", () => {
      assert.throws(() => new BitField('a'), {"name": "TypeError"});
    });
    it('bf.set(n) should set bf to 21 and return itself', () => {
      assert(bf.set(21) instanceof BitField, "bd.set(v) should set bit-field value to v and return itself");
    });
    it('bf.get() should return value of bit-filed', () => {
      assert.equal(bf.get(), 21, "bd.get(v) should return bit-field value");
    });
  });
  describe('bf.mask(n) - should return bit-mask with n-th bit set', () => {
    it('should return 1 when n=0 -> [..0001bin] = 1dec', () => {
      assert.equal(bf.mask(0)/*bit 0 set to 1*/, Number.parseInt('00001', 2));
    });
    it('should return 2 when n=1 -> [..0010bin] = 2dec', () => {
      assert.equal(bf.mask(1)/*bit 0 set to 1*/, Number.parseInt('00010', 2));
    });
    it('should return 4 when n=2 -> [..0100bin] = 4dec', () => {
      assert.equal(bf.mask(2)/*bit 0 set to 1*/, Number.parseInt('00100', 2));
    });
    it('should return 8 when n=3 -> [..1000bin] = 8dec', () => {
      assert.equal(bf.mask(3)/*bit 0 set to 1*/, Number.parseInt('01000', 2));
    });
    it('should return 16 when n=4 -> [.10000bin] = 16dec', () => {
      assert.equal(bf.mask(4)/*bit 0 set to 1*/, Number.parseInt('10000', 2));
    });
    it('should throw an error if n is not a number', () => {
      assert.throws(() => bf.mask('a'), {"name": "TypeError"});
    });
  });
  describe('bf.bit(n) - should return _true_ if n-th bit of the bf is set and _false_ otherwise', () => {
    it('should return true when n=0 -> [010101]', () => {
      assert(bf.bit(0), "first bit in 2dec=10bin should be set");
    });
    it('should return false when n=1 -> [010101]', () => {
      assert(!bf.bit(1), "second bit in 21dec shouldn't be set");
    });
    it('should return true when n=2 -> [010101]', () => {
      assert(bf.bit(0), "first bit in 2dec=10bin should be set");
    });
    it('should return false when n=3 -> [010101]', () => {
      assert(!bf.bit(1), "second bit in 21dec shouldn't be set");
    });
    it('should throw an error if n is not a number', () => {
      assert.throws(() => bf.bit('a'), {"name": "TypeError"});
    });
  });
  describe('bf.on(n) - should set n-th bit in a bf and return bf object itself', () => {
    it('br.on(n) should set n-th bit and return bit-field itself', () => {
      assert(bf.on(1) instanceof BitField, "bf.on(n) should return itself");
      assert.equal(bf.get(), 23, "gf.get() should return BitField value");
    });
    it('should return an error if n is not a number', () => {
      assert.throws(() => bf.on('a'), {"name": "TypeError"});
    });
  });
  describe('bf.on([n1,n2,...,nZ]) - should set all bits from array, in bit-field and return bf itself', () => {
    it('should return 31 if set bits 3 and then 1 or 3 and then 1 in BitField(21)', () => {
      assert(bf.set(21) instanceof BitField, "bf.set(v) should return itself");
      assert.equal(bf.on([3, 1]).get(), Number.parseInt('011111', 2));
      assert.equal(bf.get(), 31);
      assert.equal(bf.set(21).get(), 21);
      assert.equal(bf.on([1, 3]).get(), Number.parseInt('011111', 2));
      assert.equal(bf.get(), 31);
    });
    it('should return an error if n is not an array of integers', () => {
      assert.throws(() => bf.on('a'), {"name": "TypeError"});
    });
    it('should return an error if one or more elements of the array is not integers', () => {
      assert.throws(() => bf.on(['a', 2]), {"name": "TypeError"});
      assert.throws(() => bf.on(['a', 'c']), {"name": "TypeError"});
      assert.throws(() => bf.on([1, 'a', 'c']), {"name": "TypeError"});
    });
  });
  describe('bf.on(startBit#, endBit#) - should set all bits from start to end in bit-field v and return changed v', () => {
    it('should return 31 if set bits from 3 to 0 in bit-field = 21', () => {
      assert(bf.set(21) instanceof BitField, "bf.set(n) should return itself");
      assert(bf.on(3, 1) instanceof BitField, "bf.on(n, e) should return itself");
      assert.equal(bf.get(), Number.parseInt('011111', 2));
      assert.equal(bf.get(), 31);
      assert(bf.set(21) instanceof BitField, "bf.set(n) should return itself");
      assert(bf.on(1, 3) instanceof BitField, "bf.on(n, e) should return itself");
      assert.equal(bf.get(), Number.parseInt('011111', 2));
      assert.equal(bf.get(), 31);
    });
    it('should return an error if startBit or endBit or both of them are not numbers', () => {
      assert.throws(() => bf.on('a', 3), {"name": "TypeError"});
      assert.throws(() => bf.on(3, 'a'), {"name": "TypeError"});
      assert.throws(() => bf.on('a', 'b'), {"name": "TypeError"});
    });
  });
  describe('bf.off(n) - should clear n-th bit in bit-field and return itself', () => {
    it('should return 30 if clear first bit in v=3', () => {
      assert(bf.set(31) instanceof BitField, "bf.set(n) should return itself");
      assert.equal(bf.get(), 31, "bf.set(n) should set bit-field value into 31");
      assert(bf.off(0) instanceof BitField, "bf.off(n) should return itself");
      assert.equal(bf.get(), Number.parseInt('11110', 2));
      assert.equal(bf.get(), 30);
    });
    it('should return an error if n is not a number', () => {
      assert.throws(() => bf.off('a'), {"name": "TypeError"});
    });
  });
  describe('bf.off([n1,n2,...,nZ]) - should set all bits from array, in bit-field and return itself', () => {
    it('should return 21 if clear bits 3 and then 1 or 1 and then 3 in BitField(31)', () => {
      assert(bf.set(31) instanceof BitField, "should return itself");
      assert(bf.off([3, 1]) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('10101', 2));
      assert.equal(bf.get(), 21);
      assert(bf.set(31) instanceof BitField, "should return itself");
      assert(bf.off([1, 3]) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('10101', 2));
      assert.equal(bf.get(), 21);
    });
    it('should return an error if n is not an array of integers', () => {
      assert.throws(() => bf.off('a'), {"name": "TypeError"});
    });
    it('should return an error if n one or more elements of the array is not integers', () => {
      assert.throws(() => bf.off(['a', 2]), {"name": "TypeError"});
      assert.throws(() => bf.off(['a', 'c']), {"name": "TypeError"});
      assert.throws(() => bf.off([1, 'a', 'c']), {"name": "TypeError"});
    });
  });
  describe('bf.off(startBit#, endBit#) - should set all bits from start to end in bit-field return itself', () => {
    it('should return 16 if clear bits from 3 to 0 in v=31', () => {
      assert(bf.set(31) instanceof BitField, "should return itself");
      assert(bf.off(3, 0) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('10000', 2));
      assert.equal(bf.get(), 16);
      assert(bf.set(31) instanceof BitField, "should return itself");
      assert(bf.off(0, 3) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('10000', 2));
      assert.equal(bf.get(), 16);
    });
    it('should return an error if startBit or endBit or both of them are not numbers', () => {
      assert.throws(() => bf.off('a', 3), {"name": "TypeError"});
      assert.throws(() => bf.off(3, 'a'), {"name": "TypeError"});
      assert.throws(() => bf.off('a', 'b'), {"name": "TypeError"});
    });
    it('should return an error if v or startBit or endBit or any of them are not numbers', () => {
      assert.throws(() => bf.off('v', 'a', 3), {"name": "TypeError"});
      assert.throws(() => bf.off('v', 3, 'a'), {"name": "TypeError"});
      assert.throws(() => bf.off('v', 'a', 'b'), {"name": "TypeError"});
      assert.throws(() => bf.off('v', 'b', 'c'), {"name": "TypeError"});
    });
  });
  describe('bf.switch(n) - should switch n-th bit in bit-field and return itself', () => {
    it('should return 2 if switch first bit in bit-field 3 and then again return 3 after one more switch', () => {
      assert(bf.set(3) instanceof BitField, "should return itself");
      assert(bf.switch(0) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('00010', 2));
      assert.equal(bf.get(), 2);
      assert(bf.switch(0) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('00011', 2));
      assert.equal(bf.get(), 3);
    });
    it('should return an error if n is not a number', () => {
      assert.throws(() => bf.switch('a'), {"name": "TypeError"});
    });
  });
  describe('bf.switch([n1,n2,...,nZ]) - should switch all bits from array, in bit-field and return itself', () => {
    it('should return 21 if switch bits 3 and 1 in bit-field 31 and back to 31 after one more switch', () => {
      assert(bf.set(31) instanceof BitField, "should return itself");
      assert(bf.switch([3, 1]) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('010101', 2));
      assert.equal(bf.get(), 21);
      assert(bf.switch([1, 3]) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('011111', 2));
      assert.equal(bf.get(), 31);
      assert(bf.switch([1, 1]) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('011111', 2));
      assert.equal(bf.get(), 31);
      assert(bf.switch([2, 2]) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('011111', 2));
      assert.equal(bf.get(), 31);
    });
    it('should return an error if n is not an array of integers', () => {
      assert.throws(() => bf.switch('a'), {"name": "TypeError"});
    });
    it('should return an error if n one or more elements of the array is not integers', () => {
      assert.throws(() => bf.switch(['a', 2]), {"name": "TypeError"});
      assert.throws(() => bf.switch(['a', 'c']), {"name": "TypeError"});
      assert.throws(() => bf.switch([1, 'a', 'c']), {"name": "TypeError"});
    });
  });
  describe('bf.switch(startBit, endBit) - should set all bits from start to end in bit-field v return itself', () => {
    it('should return 16 if switch bits from 3 to 0 in v=31', () => {
      assert(bf.set(31) instanceof BitField, "should return itself");
      assert(bf.switch(3, 1) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('010001', 2));
      assert.equal(bf.get(), 17);
      assert(bf.switch(1, 3) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('011111', 2));
      assert.equal(bf.get(), 31);
      assert(bf.switch(1, 1) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('011101', 2));
      assert.equal(bf.get(), 29);
      assert(bf.switch(3, 3) instanceof BitField, "should return itself");
      assert.equal(bf.get(), Number.parseInt('010101', 2));
      assert.equal(bf.get(), 21);
    });
    it('should return an error if startBit or endBit or both of them are not numbers', () => {
      assert.throws(() => bf.switch('a', 3), {"name": "TypeError"});
      assert.throws(() => bf.switch(3, 'a'), {"name": "TypeError"});
      assert.throws(() => bf.switch('a', 'b'), {"name": "TypeError"});
    });
  });
});


