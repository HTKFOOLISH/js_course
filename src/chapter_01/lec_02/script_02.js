// Number

let int = 42;
let float = 3.14;
let negative = -7;
let largeNumber = 1e6; // 1 million (1e6 = 1 * 10^6)

let hex = 0xff; // 255 in hexadecimal
let binary = 0b1010; // 10 in binary
let octal = 0o77; // 63 in octal

console.log(int, float, negative, largeNumber);
console.log(hex, binary, octal);

// String
let doubleQuoted = "HTKFoolish";
let singleQuoted = "Mobile Front-end Developer";
let backtickQuoted = `Welcome to my JavaScript world!, from ${doubleQuoted}`;

console.log(doubleQuoted, singleQuoted, backtickQuoted);

// Boolean
let isMale = 2 < 1 ? true : false; // false because 2 is not less than 1
console.log(isMale);

// Undefined
let notDefined;
console.log(notDefined); // undefined

// Null
let emptyValue = null;
console.log(emptyValue); // null

// Symbol
let uniqueSymbol = Symbol("unique");
let anotherSymbol = Symbol("unique");
console.log(uniqueSymbol === anotherSymbol); // false, symbols are unique

// BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);

// Typeof
// Checking types of variables
console.log(typeof int); // "number"
console.log(typeof doubleQuoted); // "string"
console.log(typeof isMale); // "boolean"
console.log(typeof notDefined); // "undefined"
console.log(typeof emptyValue); // "object" (null is considered an object in JavaScript)
console.log(typeof uniqueSymbol); // "symbol"
console.log(typeof bigIntValue); // "bigint"

// Type Conversion
let numString = "123";
let convertedNumber = Number(numString);
console.log(convertedNumber); // 123

let invalidString = "abc";
let convertedInvalid = Number(invalidString);
console.log(convertedInvalid); // NaN (Not a Number)
let booleanString = "true";
let convertedBoolean = Boolean(booleanString);
console.log(convertedBoolean); // true (non-empty string is truthy)
