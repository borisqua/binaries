# Binary functions

This is my set of functions to operate with binary data

## Reading Binary Buffer

### Reading a big endian value from the buffer

```JavaScript
  readBigEndian(buffer, length, offset)
```  

alias:
```JavaScript
  readBE(buffer, offset)
```  

  Reads byte sequence of defined length and returns its ```String``` representation as a hexadecimal value according to _Big Endian_ notation

### Reading a little endian value from the buffer

```JavaScript
  readLittleigEndian(buffer, length, offset)
```  

alias:
```JavaScript
  readLE(buffer, offset)
```  

  Reads byte sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation

### Reading a little endian 64 bit value from the buffer

```JavaScript
  read64LittleigEndian(buffer, offset)
```  

alias:
```JavaScript
  read64LE(buffer, offset)
```  

  Reads byte sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation

### Reading a big endian 64 bit value from the buffer

```JavaScript
  read64BigEndian(buffer, offset)
```  

alias:
```JavaScript
  read64BE(buffer, offset)
```  

  Reads byte sequence of defined length and returns its ```String``` representation as a hexadecimal value  according to _Little Endian_ notation

