/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

const { c } = require("../04_mathEquations/mathEquations");

// Add your code right below, good luck!
const firstName = 'Carlos'; // Your first name
const lastName = 'Stevenson'; // Your last name
const thisYear = 1965; // The current year
const birthYear = 1947; // Your birth year
const greeting = `Hello! My name is ${firstName} ${lastName} and I am ${thisYear - birthYear} years old.`; // The greeting
const fullName = `${firstName} ${lastName}`; // Your full name
const age = thisYear - birthYear; // Your age



// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
