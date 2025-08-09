/* ======= Arithmetic Operators ======= */

console.log("======= Arithmetic Operators =======");

let a = 5;
let b = 3;

// Addition

console.log("Addition:", a + b); // 8

// Subtraction
console.log("Subtraction:", a - b); // 2

// Multiplication
console.log("Multiplication:", a * b); // 15

// Division
console.log("Division:", a / b); // 1.6666666666666667

// Modulus
console.log("Modulus:", a % b); // 2

// Exponentiation
console.log("Exponentiation:", a ** b); // 125

// Increment
a++;
console.log("Increment:", a); // 6

// Decrement
b--;
console.log("Decrement:", b); // 2

/* ======= Comparison Operators ======= */

console.log("======= Comparison Operators =======");

let x = 10;
let y = "10";
let z = 11;

// Equal to
console.log("Equal to:", x == y); // true

// Strict equal to
console.log("Strict equal to:", x === y); // false

// Not equal to
console.log("Not equal to:", x != y); // false

// Strict not equal to
console.log("Strict not equal to:", x !== y); // true

// Greater than
console.log("Greater than:", x > y, z > x); // false, true

// Less than
console.log("Less than:", x < y, y < z); // false, true

// Greater than or equal to
console.log("Greater than or equal to:", x >= y); // true

// Less than or equal to
console.log("Less than or equal to:", x <= y); // true

/* ======= Logical Operators ======= */

console.log("======= Logical Operators =======");

// Logical AND
console.log("Logical AND:", x < y && y < z); // false

// Logical OR
console.log("Logical OR:", x < y || y < z); // true

// Logical NOT
console.log("Logical NOT:", !(x < y)); // true

// Logical XOR (exclusive OR)
console.log("Logical XOR:", (x < y) ^ (y < z)); // true
