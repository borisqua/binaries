# Binary functions

This is my set of functions to operate with binary data

## Table of Contents
[Reading Binary Buffer](#reading)
  - [readBigEndian(buffer, length, offset)](#readBigEndian)

## Reading Binary Buffer<a name="reading"/>

### readBigEndian(buffer, length, offset)

Reading a big endian value of size ```length``` from ```buffer``` with offset ```offset```

alias:
```JavaScript
  readBE(buffer, length, offset)
```  

Reads byte sequence of defined ```length``` and returns its ```String``` representation as a hexadecimal value according to _Big Endian_ notation

### readLittleigEndian(buffer, length, offset)

Reading a little endian value of size ```length``` from the ```buffer``` with offset ```offset```

alias:
```JavaScript
  readLE(buffer, length, offset)
```  

Reads byte sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation

### read64LittleigEndian(buffer, offset)

Reading a little endian 64 bit value from the buffer

alias:
```JavaScript
  read64LE(buffer, offset)
```  

Reads 64 bytes sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation

### read64BigEndian(buffer, offset)

Reading a big endian 64 bit value from the buffer

alias:
```JavaScript
  read64BE(buffer, offset)
```  

  Reads byte sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation

