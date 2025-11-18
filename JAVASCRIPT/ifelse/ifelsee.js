
//  Basic Level 1
let number = prompt("Enter the number positive or negative");
if (number > 0) {
  console.log(number ,"Positive");
} else {
  console.log(number ,"Negative");
}

//  2
if (number % 2 === 0) {
  console.log(number ,"Even");
} else {
  console.log(number ,"Odd");
}

//  3
let age = prompt("Enter the ages");
if (age >= 18) {
  console.log( age ,"Eligible to Vote");
} else {
  console.log( age ,"Not Eligible");
}

//  4
let value = prompt("To check the type give a number or string"); 
if (typeof value === "number") {
  console.log( value ,"It's a number");
} else if (typeof value === "string") {
  console.log( value ,"It's a string");
} else if (typeof value === "boolean") {
  console.log(value ,"It's a boolean");
} else {
  console.log(value ,"Other type");
}

//  5
let num1 = prompt("Enter the number1");
let num2 = prompt("Enter the number2");
if (num1 > num2) {
  console.log(num1 + " is greater");
} else if (num2 > num1) {
  console.log(num2 + " is greater");
} else {
  console.log("Both numbers are equal");
}

//  6
let str1=prompt("Enter the str1");
let str2=prompt("Enter the str2");
if(str1==str2) {
    console.log( str1 , " String are equal " ,str2);
} else{
    console.log( str1 ," string is not equal " ,str2);
}

//  7
if (number % 5 === 0) {
  console.log(number ," Multiple of 5");
} else {
  console.log(number ," Not a multiple of 5");
}

//  8
if (number === 0) {
  console.log(number ," is Zero");
} else {
  console.log(number , "is Not Zero");
}

//  9
let marks = parseFloat(prompt("Enter your marks:"));
if (marks >= 35) {
  console.log(marks," u Pass");
} else {
  console.log(marks," sorry u Fail");
}

//  10
let temp = parseFloat(prompt("Enter the temperature:"));
if (temp < 20) {
  console.log(temp, " is Cold");
} else if (temp >= 20 && temp <= 30) {
  console.log(temp ," is too Warm");
} else {
  console.log(temp, " is too Hot");
}

// intermediaate level  11
let num11 = parseFloat(prompt("Enter first number:"));
let num22 = parseFloat(prompt("Enter second number:"));
let num33 = parseFloat(prompt("Enter third number:"));
if (num11 >= num22 && num11 >= num33) {
  console.log(num11 + " is the largest");
} else if (num22 >= num11 && num22 >= num33) {
  console.log(num22 + " is the largest");
} else {
  console.log(num33 + " is the largest");
}

//  12
let year = parseInt(prompt("Enter a year:"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

//  13
let ch = prompt("Enter a single character:");
if (ch.length !== 1) {
  console.log("Please enter only one character.");
} else if (/[aeiouAEIOU]/.test(ch)) {
  console.log("Vowel");
} else if (/[a-zA-Z]/.test(ch)) {
  console.log("Consonant");
} else if (/[0-9]/.test(ch)) {
  console.log("Number");
} else {
  console.log("Special Symbol");
}

//  14
let username = prompt("Enter username:");
let password = prompt("Enter password:");
if (username === "admin" && password === "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid Credentials");
}

//  15
if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else if (marks >= 70) {
  console.log("C");
} else {
  console.log("Fail");
}

//  16
if (number > 0 && number % 2 === 0) {
  console.log("Positive Even");
} else if (number > 0 && number % 2 !== 0) {
  console.log("Positive Odd");
} else if (number < 0) {
  console.log("Negative Number");
} else if (number === 0) {
  console.log("Zero");
}

//  17
let input = prompt("Enter some how can trim work:");
if (typeof input === "string" && input.trim() !== "") {
  console.log("Valid String");
} else {
  console.log("Invalid");
}

//  18
let price = parseFloat(prompt("Enter the price:"));
if (price > 1000) {
  console.log("20% discount");
} else if (price > 500) {
  console.log("10% discount");
} else {
  console.log("No discount");
}

//  19
let a = "10";  // string
let b = 10;    // number
if (a == b) {
  console.log("Using == : Equal");
} else {
  console.log("Using == : Not Equal");
}
if (a === b) {
  console.log("Using === : Equal");
} else {
  console.log("Using === : Not Equal");
}

//  20
let operator = prompt("Enter operator (+, -, *, /):");
if (operator === "+") {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
} else if (operator === "-") {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
} else if (operator === "*") {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
} else if (operator === "/") {
  if (num2 !== 0) {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
  } else {
    console.log("Cannot divide by zero");
  }
} else {
  console.log("Invalid operator");
}

//  Switch  21
switch (true) {
  case number > 0:
    console.log("Positive");
    break;
  case number < 0:
    console.log("Negative");
    break;
  case number === 0:
    console.log("Zero");
    break;
  default:
    console.log("Invalid input");
}

//  22
switch (true) {
  case number % 2 === 0:
    console.log("Even");
    break;
  case number % 2 !== 0:
    console.log("Odd");
    break;
  default:
    console.log("Invalid input");
}

//  23
switch (true) {
  case age >= 18:
    console.log("Eligible to Vote");
    break;
  case age < 18:
    console.log("Not Eligible");
    break;
  default:
    console.log("Invalid input");
}

//  24
switch (typeof value) {
  case "number":
    console.log("It's a number");
    break;
  case "string":
    console.log("It's a string");
    break;
  case "boolean":
    console.log("It's a boolean");
    break;
  default:
    console.log("Other type");
}

//  25
switch (true) {
  case num1 > num2:
    console.log(num1 + " is greater");
    break;
  case num2 > num1:
    console.log(num2 + " is greater");
    break;
  case num1 === num2:
    console.log("Both numbers are equal");
    break;
  default:
    console.log("Invalid input");
}

//  26
switch (true) {
  case str1 === str2:
    console.log("Strings are equal");
    break;
  case str1 !== str2:
    console.log("Strings are not equal");
    break;
  default:
    console.log("Invalid input");
}

//  27
switch (true) {
  case number % 5 === 0:
    console.log("Multiple of 5");
    break;
  case number % 5 !== 0:
    console.log("Not a multiple of 5");
    break;
  default:
    console.log("Invalid input");
}

//  28
switch (true) {
  case number === 0:
    console.log("Zero");
    break;
  case number !== 0:
    console.log("Not Zero");
    break;
  default:
    console.log("Invalid input");
}

//  29
switch (true) {
  case marks >= 35:
    console.log("Pass");
    break;
  case marks < 35:
    console.log("Fail");
    break;
  default:
    console.log("Invalid input");
}

//  30
switch (true) {
  case temp < 20:
    console.log("Cold");
    break;
  case temp >= 20 && temp <= 30:
    console.log("Warm");
    break;
  case temp > 30:
    console.log("Hot");
    break;
  default:
    console.log("Invalid input");
}

//  31
switch (true) {
  case num1 >= num2 && num1 >= num22:
    console.log(num1 + " is the largest");
    break;
  case num2 >= num1 && num2 >= num22:
    console.log(num2 + " is the largest");
    break;
  case num3 >= num1 && num22 >= num2:
    console.log(num22 + " is the largest");
    break;
  default:
    console.log("Invalid input");
}

//  32
switch (true) {
  case (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0):
    console.log("Leap Year");
    break;
  default:
    console.log("Not a Leap Year");
}