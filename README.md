# Binary operations js package

This is my set of JavaScript functions to deal with binary values

## Table of Contents
- [`BitOps` static bit operations library](#bitops-static-bit-operations-library)
  - [`BitOps.mask(n)` - bit mask for n-th bit](#bitopsmaskn---bit-mask-for-n-th-bit)
  - [`BitOps.bit(v, n)` - check n-th bit state in a bit-field](#bitopsbitv-n---check-n-th-bit-in-a-binary-field)
  - [`BitOps.on(v, n, e)` - set bits in a bit-field](#bitopsonv-n-e---set-bits-in-a-bit-field)
  - [`BitOps.off(v, n, e)` - clear bits in a bit-field](#bitopsoffv-n-e---clear-bits-in-a-bit-field)
  - [`BitOps.switch(v, n, e)` - toggle bits in a bit-field](#bitopsswitchv-n-e---toggle-bits-in-a-bit-field)
  - [`BitOps.isolate_rightmost1(v)` - isolate a rightmost set bit in a bit-field](#bitopsisolate_rightmost1v---isolate-a-rightmost-set-bit-in-a-bit-field)
  - [`BitOps.isolate_rightmost0(v)` - isolate a rightmost clear bit in a bit-field](#bitopsisolate_rightmost0v---isolate-a-rightmost-clear-bit-in-a-bit-field)
  - [`BitOps.right_propagate_rightmost1(v)` - propagate a rightmost set bit in a bit-field](#bitopsright_propagate_rightmost1v---propagate-a-rightmost-set-bit-in-a-bit-field)
- [`BitField` binary field class](#bitfield-binary-field-class)
  - [`BitField(V)` - the constructor](#bitfieldv---the-constructor-of-a-bit-field-object)
  - [`get()` - get the value of the bit field object](#get---returns-the-value-of-the-bitfield-object)
  - [`set(v)` - set the value of the bit field object](#setv---sets-the-value-property-of-the-bitfield-object-to-v)
  - [`mask(n)` - bit mask for n-th bit](#maskn---bit-mask-for-n-th-bit)
  - [`bit(n)` - check *n*-th bit](#bitn---check-n-th-bit-in-a-bit-field)
  - [`on(n, e)` - set bits in a bit field](#onn-e---set-bits-in-a-bit-field)
  - [`off(n, e)` - clear bits in a bit field](#offn-e---clear-bits-in-a-bit-field)
  - [`switch(n, e)` - toggle bits in a bit field](#switchn-e---toggle-bits-in-a-bit-field)
  - [`isolate_rightmost1()` - isolate a rightmost set bit in a bit field](#isolate_rightmost1---isolate-a-rightmost-set-bit-in-a-bit-field)
  - [`isolate_rightmost0()` - isolate a rightmost clear bit in a bit field](#isolate_rightmost0---isolate-a-rightmost-clear-bit-in-a-bit-field)
  - [`right_propagate_rightmost1()` - propagate a rightmost set bit in a bit field](#right_propagate_rightmost1---propagate-a-rightmost-set-bit-in-a-bit-field)
- [Binary buffer operations](#binary-buffer-operations)
  - [Variable length int `vInt(buffer, offset)`](#variable-length-int-vintbuffer-offset)
  - [Big endian value `bigEndian(buffer, length, offset)`](#big-endian-value-bigendianbuffer-length-offset)
  - [Little endian value `littleEndian(buffer, length, offset)`](#little-endian-value-littleendianbuffer-length-offset)


## `BitOps` static bit operations library

---
The set of static methods to deal with bits in a binary field 

### `BitOps.mask(n)` - bit mask for n-th bit
Returns a *Number* equal to the bit mask for the *n*-th bit in the field

[Back to contents](#table-of-contents)

### `BitOps.bit(v, n)` - check n-th bit in a binary field
Checks if *n*-th bit in the field *v* is set on. 

Returns a *Boolean*: *true* if it is, or *false* otherwise.

[Back to contents](#table-of-contents)

### `BitOps.on(v, n, e)` - set bits in a bit-field
This function has three signatures:
- `BitOps.on(v,n)` here *n* is a bit index: sets *n*-th bit, in the *v* binary field, on;
- `BitOps.on(v,n)` here *n* is an array of bit indexes: 
  sets each bit, with an index from the *n* array in the *v* binary field, on;
- `BitOps.on(v,n,e)` here *n* is a start index and *e* is an end index:
  sets each bit, in the *v* binary field from *n*-th to *e*-th bits inclusive, on;
  
Returns a *Number* equal to modified field *v*.

[Back to contents](#table-of-contents)

### `BitOps.off(v, n, e)` - clear bits in a bit-field
This function has three signatures:
- `BitOps.off(v,n)` here *n* is a bit index: sets *n*-th bit, in the *v* binary field, off;
- `BitOps.off(v,n)` here *n* is an array of bit indexes:
  sets each bit, with an index from the *n* array in the *v* binary field, off;
- `BitOps.off(v,n,e)` here *n* is a start index, and *e* is an end index:
  sets each bit, in the *v* binary field from *n*-th to *e*-th bits inclusive, off;

Returns a *Number* equal to modified field *v*.

[Back to contents](#table-of-contents)

### `BitOps.switch(v, n, e)` - toggle bits in a bit-field
This function has three signatures:
- `BitOps.switch(v,n)` here *n* - is an bit index: switches *n*-th bit in the *v* binary field;
- `BitOps.switch(v,n)` here *n* - ia an array of bit indexes:
  switches each bit with an index from the *n* array in the *v* binary field;
- `BitOps.switch(v,n,e)` here *n* - is a start index, and *e* - an end index:
  switches each bit in the *v* binary field, from *n*-th to *e*-th bits inclusive;

Returns a *Number* equal to modified field *v*.

[Back to contents](#table-of-contents)

### `BitOps.off_rightmost(v)` - clear a rightmost bit in a bit-field
Sets off the rightmost bit in the field *v*

Returns a *Number* equal to modified field *v*.

[Back to contents](#table-of-contents)

### `BitOps.on_rightmost(v)` - set a rightmost bit in a bit-field
Sets on the rightmost bit in the field *v*

Returns a *Number* equal to modified field *v*.

[Back to contents](#table-of-contents)

### `BitOps.isolate_rightmost1(v)` - isolate a rightmost set bit in a bit-field
Isolates the rightmost set to 1 bit in the field *v*

Returns a *Number* equal to modified field *v*.

[Back to contents](#table-of-contents)

### `BitOps.isolate_rightmost0(v)` - isolate a rightmost clear bit in a bit-field
Isolates the rightmost set to 0 bit in the field *v*

Returns a *Number* equal to modified field *v*.

[Back to contents](#table-of-contents)

### `BitOps.right_propagate_rightmost1(v)` - propagate a rightmost set bit
Propagate the rightmost set to 1 bit to the right bound of the field *v*

Returns a *Number* equal to modified field *v*.

[Back to contents](#table-of-contents)

## `BitField` binary field class

---
Do the same operations as the BitOps static methods do, but operates like an object:
modifies and returns itself, so it can build the functional style operations chains.

### `BitField(v)` - the constructor of a bit field object 
The constructor checks if *v* is a proper number (JavaScript *Number* data type), 
creates the bit field object instance, and
assigns the *v* value to its private *value* property. This property represents the 
bit field value.

[Back to contents](#table-of-contents)

### `get()` - returns the value of the BitField object
Returns a *Number* equal to the *value* property of the bit field object;

[Back to contents](#table-of-contents)

### `set(v)` - sets the *value* property of the BitField object to *v*
Checks if *v* is proper type (Should be of Number type) and sets the *value* 
property of the bit field object to the *v*

Returns the reference to itself.

[Back to contents](#table-of-contents)

### `mask(n)` - bit mask for n-th bit
Returns a *Number* equal to bit mask for the *n*-th bit in the field value

[Back to contents](#table-of-contents)

### `bit(n)` - check n-th bit in a bit field
Checks if *n*-th bit in the field is set on.

Returns a *Boolean*: *true* if it is, or *false* otherwise.

[Back to contents](#table-of-contents)

### `on(n, e)` - set bits in a bit-field
This function has three signatures:
- `on(n)` here *n* is a bit index: sets *n*-th bit, in the bit field, on;
- `on(n)` here *n* is an array of bit indexes:
  sets each bit, with an index from the *n* array in the bit field, on;
- `on(n,e)` here *n* is a start index and *e* is an end index:
  sets each bit, in the bit field from *n*-th to *e*-th bits inclusive, on;

Returns the reference to itself.

[Back to contents](#table-of-contents)

### `off(n, e)` - clear bits in a bit-field
This function has three signatures:
- `off(n)` here *n* is a bit index: sets *n*-th bit, in the bit field, off;
- `off(n)` here *n* is an array of bit indexes:
  sets each bit, with an index from the *n* array in the bit field, off;
- `off(n,e)` here *n* is a start index and *e* is an end index:
  sets each bit, in the bit field from *n*-th to *e*-th bits inclusive, off;

Returns the reference to itself.

[Back to contents](#table-of-contents)

### `switch(n, e)` - toggle bits in a bit-field
This function has three signatures:
- `switch(n)` here *n* is a bit index: switches *n*-th bit, in the bit field;
- `switch(n)` here *n* is an array of bit indexes:
  switches each bit, with an index from the *n* array in the bit field;
- `switch(n,e)` here *n* is a start index and *e* is an end index:
  switches each bit, in the bit field from *n*-th to *e*-th bits inclusive;

Returns the reference to itself.

[Back to contents](#table-of-contents)

### `off_rightmost()` - clear a rightmost bit in a bit field
Sets off the rightmost bit in the bit field

Returns the reference to itself.

[Back to contents](#table-of-contents)

### `on_rightmost()` - set a rightmost bit in a bit field
Sets on the rightmost bit in the bit field

Returns the reference to itself.

[Back to contents](#table-of-contents)

### `isolate_rightmost1()` - isolate a rightmost set bit in a bit field
Isolates the rightmost bit set to 1 in the bit field

Returns the reference to itself.

[Back to contents](#table-of-contents)

### `isolate_rightmost0()` - isolate a rightmost clear bit in a bit field
Isolates the rightmost bit set to 0 in the bit field 

Returns the reference to itself.

[Back to contents](#table-of-contents)

### `right_propagate_rightmost1()` - propagate a rightmost set bit
Propagate the rightmost bit set to 1 to the right bound of the bit field

Returns the reference to itself.

[Back to contents](#table-of-contents)

## Binary buffer operations

---
### Variable length int 'vInt(buffer, offset)'

Calculates length, value and uint8 buffer of variable-length integer

[Back to contents](#table-of-contents)

### Big endian value `bigEndian(buffer, length, offset)`
Reads a big endian value of size `length` from `buffer` with offset `offset`
Calculates a value from a buffer according to the big-endian order of bytes

Returns *String* representation as a hexadecimal value according to 
Big Endian notation

[Back to contents](#table-of-contents)

### Little endian value `littleEndian(buffer, length, offset)`
Reads a little endian value of size ```length``` from the ```buffer``` with offset ```offset```
Calculates a value from a buffer according to the little-endian order of bytes

Returns *String* representation as a hexadecimal value according to 
Little Endian notation

[Back to contents](#table-of-contents)



