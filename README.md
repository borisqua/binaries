# Binary functions

This is my set of functions to operate with binary data

## Table of Contents
- [Bit operations](#bitops)
  - [BitOps.mask(n) - bit mask for n-th bit](#bitopsmask)
  - [BitOps.check(v, n) - check n-th bit state in bit-field v](#bitopscheck)
  - [BitOps.on(v, n, e) - set bits in bit-field v](#bitopson)
  - [BitOps.off(v, n, e) - clear bits in bit-field v](#bitopsoff)
  - [BitOps.switch(v, n, e) - toggle bits in bit-field v](#bitopsswitch)
- [Binary Filed](#reading)
- [Binary Buffer Operations](#reading)
  - [readBigEndian(buffer, length, offset)](#readBigEndian)
  - [readLittleEndian(buffer, length, offset)](#readBigEndian)
  - [read64BigEndian(buffer, length, offset)](#readBigEndian)
  - [read64LittleEndian(buffer, length, offset)](#readBigEndian)

<a name="bitops"></a>
## Bit operations

### 
<a name="reading"></a>
## Reading Binary Buffer

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

