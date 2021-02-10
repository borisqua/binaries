# Binary operations js package

This is my set of javaScript functions to operate with binary data

## Table of Contents
- [`BitOps` static bit operations library](#bit-operations)
  - [```BitOps.mask(n)``` - bit mask for n-th bit](#bitopsmaskn---bit-mask-for-n-th-bit)
  - [```BitOps.check(v, n)``` - check n-th bit state in a bit-field](#bitopscheckv-n---check-n-th-bit-in-a-binary-field)
  - [```BitOps.on(v, n, e)``` - set bits in a bit-field](#bitopsonv-n-e---set-bits-in-bit-field)
  - [```BitOps.off(v, n, e)``` - clear bits in a bit-field](#bitopsoffv-n-e---clear-bits-in-bit-field)
  - [```BitOps.switch(v, n, e)``` - toggle bits in a bit-field](#bitopsswitchv-n-e---toggle-bits-in-bit-field)
  - [```BitOps.isolate_rightmost1(v)``` - isolate a rightmost set bit in a bit-field](#bitopsisolate_rightmost1v---isolate-a-rightmost-set-bit-in-bit-field)
  - [```BitOps.isolate_rightmost0(v)``` - isolate a rightmost clear bit in a bit-field](#bitopsisolate_rightmost0v---isolate-a-rightmost-clear-bit-in-bit-field)
  - [```BitOps.right_propagate_rightmost1(v)``` - propagate a rightmost set bit in a bit-field](#bitopsright_propagate_rightmost1v---propagate-a-rightmost-set-bit-in-bit-field)
- [`BitField` binary field class](#binary-field-class)
- [Binary buffer operations](#binary-buffer-operations)
  - [readBigEndian(buffer, length, offset)](#readbigendianbuffer-length-offset)
  - [readLittleEndian(buffer, length, offset)](#read64littleendianbuffer-offset)
  - [read64BigEndian(buffer, length, offset)](#read64bigendianbuffer-offset)
  - [read64LittleEndian(buffer, length, offset)](#read64littleendianbuffer-offset)

## Bit operations
### ```BitOps.mask(n)``` - bit mask for n-th bit
Returns integer bit mask for the *n*-th bit in the field

[Back to contents](#table-of-contents)

### ```BitOps.check(v, n)``` - check n-th bit in a binary field
Checks if *n*-th bit in the field *v* is set on. 
Return *true* if it is, or *false* otherwise.

[Back to contents](#table-of-contents)

### ```BitOps.on(v, n, e)``` - set bits in a bit-field
This function has three signatures:
- `BitOps(v,n)`, where *n* - is an bit index: sets on *n*-th bit in the *v* binary field;
- `BitOps(v,n)`, where *n* - ia an array of bit indexes: 
  sets on each bit with an index from the *n* array in the *v* binary field;
- `BitOps(v,n,e)`, where *n* - is a start index, and *e* - an end index:
  sets on each bit in the *v* binary field, from *n*-th to *e*-th bits inclusive;
  
Returns modified field *v*.

[Back to contents](#table-of-contents)

### ```BitOps.off(v, n, e)``` - clear bits in a bit-field
This function has three signatures:
- `BitOps(v,n)`, where *n* - is an bit index: sets off *n*-th bit in the *v* binary field;
- `BitOps(v,n)`, where *n* - ia an array of bit indexes:
  sets off each bit with an index from the *n* array in the *v* binary field;
- `BitOps(v,n,e)`, where *n* - is a start index, and *e* - an end index:
  sets off each bit in the *v* binary field, from *n*-th to *e*-th bits inclusive;

Returns modified field *v*.

[Back to contents](#table-of-contents)

### ```BitOps.switch(v, n, e)``` - toggle bits in a bit-field
This function has three signatures:
- `BitOps(v,n)`, where *n* - is an bit index: switches *n*-th bit in the *v* binary field;
- `BitOps(v,n)`, where *n* - ia an array of bit indexes:
  switches each bit with an index from the *n* array in the *v* binary field;
- `BitOps(v,n,e)`, where *n* - is a start index, and *e* - an end index:
  switches each bit in the *v* binary field, from *n*-th to *e*-th bits inclusive;

Returns modified field *v*.

[Back to contents](#table-of-contents)

### ```BitOps.off_rightmost(v)``` - clear a rightmost bit in a bit-field
Sets off the rightmost bit in the field *v*

Returns modified field *v*.

[Back to contents](#table-of-contents)

### ```BitOps.on_rightmost(v)``` - set a rightmost bit in a bit-field
Sets on the rightmost bit in the field *v*

Returns modified field *v*.

[Back to contents](#table-of-contents)

### ```BitOps.isolate_rightmost1(v)``` - isolate a rightmost set bit in a bit-field
Isolates the rightmost set to 1 bit in the field *v*

Returns modified field *v*.

[Back to contents](#table-of-contents)

### ```BitOps.isolate_rightmost0(v)``` - isolate a rightmost clear bit in a bit-field
Isolates the rightmost set to 0 bit in the field *v*

Returns modified field *v*.

[Back to contents](#table-of-contents)

### ```BitOps.right_propagate_rightmost1(v)``` - propagate a rightmost set bit in a bit-field
Propagate the rightmost set to 1 bit to the right bound of the field *v*

Returns modified field *v*.

[Back to contents](#table-of-contents)

## `BitField` binary field class
Do the same operations as BitOps static methods do, but operates like an object:
modifies and returns itself, so the functional style operations chains can be built.

[Back to contents](#table-of-contents)

## Binary buffer operations
### Reading Binary Buffer
[Back to contents](#table-of-contents)

### readBigEndian(buffer, length, offset)

Reading a big endian value of size ```length``` from ```buffer``` with offset ```offset```

alias:
```JavaScript
  readBE(buffer, length, offset)
```  

Reads byte sequence of defined ```length``` and returns its ```String``` representation as a hexadecimal value according to _Big Endian_ notation
[Back to contents](#table-of-contents)

### readLittleEndian(buffer, length, offset)

Reading a little endian value of size ```length``` from the ```buffer``` with offset ```offset```

alias:
```JavaScript
  readLE(buffer, length, offset)
```  

Reads byte sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation

Reads 64 bytes sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation
[Back to contents](#table-of-contents)

### read64BigEndian(buffer, offset)

Reading a big endian 64 bit value from the buffer

alias:
```JavaScript
  read64BE(buffer, offset)
```  

  Reads byte sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation
  [Back to contents](#table-of-contents)

### read64LittleEndian(buffer, offset)

Reading a little endian 64 bit value from the buffer

alias:
```JavaScript
  read64LE(buffer, offset)
```  
[Back to contents](#table-of-contents)
