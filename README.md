# Binary functions

This is my set of javaScript functions to operate with binary data

## Table of Contents
- [Bit operations](#bit-operations)
  - [```BitOps.mask(n)``` - bit mask for n-th bit](#bitopsmaskn---bit-mask-for-n-th-bit)
  - [```BitOps.check(v, n)``` - check n-th bit state in bit-field](#bitopscheckv-n---check-n-th-bit-in-a-binary-field)
  - [```BitOps.on(v, n, e)``` - set bits in bit-field](#bitopsonv-n-e---set-bits-in-bit-field)
  - [```BitOps.off(v, n, e)``` - clear bits in bit-field](#bitopsoffv-n-e---clear-bits-in-bit-field)
  - [```BitOps.switch(v, n, e)``` - toggle bits in bit-field](#bitopsswitchv-n-e---toggle-bits-in-bit-field)
  - [```BitOps.off_rightmost(v)``` - clear rightmost bit in bit-field](#bitopsoff_rightmostv---clear-rightmost-bit-in-bit-field)
  - [```BitOps.on_rightmost(v)``` - set rightmost bit in bit-field](#bitopsonv-n-e---set-bits-in-bit-field)
- [Binary Field](#binary-field-class)
- [Binary buffer operations](#binary-buffer-operations)
  - [readBigEndian(buffer, length, offset)](#)
  - [readLittleEndian(buffer, length, offset)](#)
  - [read64BigEndian(buffer, length, offset)](#)
  - [read64LittleEndian(buffer, length, offset)](#)

## Bit operations
### ```BitOps.mask(n)``` - bit mask for n-th bit
### ```BitOps.check(v, n)``` - check n-th bit in a binary field
### ```BitOps.on(v, n, e)``` - set bits in bit-field
### ```BitOps.off(v, n, e)``` - clear bits in bit-field
### ```BitOps.switch(v, n, e)``` - toggle bits in bit-field
### ```BitOps.off_rightmost(v)``` - clear rightmost bit in bit-field

## Binary field class

## Binary buffer operations
### Reading Binary Buffer

<a name="readBigEndian"></a>
### readBigEndian(buffer, length, offset)

Reading a big endian value of size ```length``` from ```buffer``` with offset ```offset```

alias:
```JavaScript
  readBE(buffer, length, offset)
```  

Reads byte sequence of defined ```length``` and returns its ```String``` representation as a hexadecimal value according to _Big Endian_ notation

### readLittleEndian(buffer, length, offset)

Reading a little endian value of size ```length``` from the ```buffer``` with offset ```offset```

alias:
```JavaScript
  readLE(buffer, length, offset)
```  

Reads byte sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation

Reads 64 bytes sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation

### read64BigEndian(buffer, offset)

Reading a big endian 64 bit value from the buffer

alias:
```JavaScript
  read64BE(buffer, offset)
```  

  Reads byte sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation

### read64LittleEndian(buffer, offset)

Reading a little endian 64 bit value from the buffer

alias:
```JavaScript
  read64LE(buffer, offset)
```  
