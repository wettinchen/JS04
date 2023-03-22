// The Number.parseFloat() method parse an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
const myNumber = 42;
const myFloat = 42.01;
const myString = "42.123abc";

console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myString));