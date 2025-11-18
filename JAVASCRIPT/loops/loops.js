

//  1
let a=10;
for(let i = 1 ; i <= 10 ; i++)
{
    console.log(" print the numver  ",i);
}

//  2
for(let j = 1 ; j <= 20 ; j++)
    {
        if(j % 2 == 0)
            console.log(" print he even number 1 to 10 " ,j);
}

//  3 
for( let b = 1 ; b <= 10 ; b++)
{
    let a=5;
     let k=a*b;
     console.log( " print the multiplication value of 5 : ",k);
}
//  4
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum =sum + i;
}
console.log("The sum of numbers from 1 to 100 is: " + sum);

//  5
let b=1234;
for(let i = 0 ; i < 3 ; i++){
    console.log("Reversed numbers : ",b[i]);
}

//  6
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log("The factorial of " + number + " is " + factorial);

//  7
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log("print all odd numbers",i);
  }
}

//  8
let str = "Hello World";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log("Original String: " + str);
console.log("Reversed String: " + reversed);

//  9
let count = 0;
let vowels = "aeiouAEIOU";
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}
console.log("String: " + str);
console.log("Number of vowels: " + count);

//  10
for (let i = 1; i <= 10; i++) {
  let square = i * i;
  console.log("Square of " + i + " is " + square);
}

//  11
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//  12
let num = 12345; 
let sum1 = 0;
let temp = num;
while (temp > 0) {
  sum1 += temp % 10; 
  temp = Math.floor(temp / 10); 
}
console.log("Sum of digits of " + num + " is " + sum);

//  13
let c = 1;
console.log("Numbers divisible by 3 between 1 and 50:");
while (c <= 50) {
  if (c % 3 === 0) {
    console.log(c);
  }
  c++;
}

//  14
let number1 = 5;
let factorial1 = 1;
let j = 1;
while (j <= number1) {
  factorial1 *= j;
  j++;
}
console.log("Factorial of " + number1 + " is " + factorial1);

//  15
let num1 = 123; 
let reversed1= 0;
let temp1 = num;
while (temp1 > 0) {
  let digit = temp1 % 10;          
  reversed1 = reversed1 * 10 + digit; 
  temp1 = Math.floor(temp1 / 10);   
console.log("Original number: " + num1);
console.log("Reversed number: " + reversed1);
}

//  16
let n1 = 0, n2 = 1, nextTerm;
let count1 = 1;
console.log("Fibonacci series up to 10 terms:",n2);
while (count1 <= 10) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
  count1++;
}

//  17
let number2 = parseInt(prompt("Enter a number to find total digits : "));
let count2 = 0;
let temp2 = number2; 
if (temp2 === 0) {
  count2 = 1;
} else {
  while (temp2 > 0) {
    temp2 = Math.floor(temp2 / 10); 
    count2++;
  }
}
console.log("Number: " + number2);
console.log("Total digits: " + count2);

//  18
let number3 = parseInt(prompt("Enter a number largest digit in the given numbers : "));
let temp3 = Math.abs(number3);
let largest3 = 0;
while (temp3 > 0) {
  let digit3 = temp3 % 10; 
  if (digit3 > largest3) {
    largest3 = digit3; 
  }
  temp3 = Math.floor(temp3 / 10); 
}
console.log("Number: " + number3);
console.log("Largest digit: " + largest3);

//  19
let arr = [10, 20, 30, 40, 50];
let v = 0;
console.log("Array elements:");
while (v < arr.length) {
  console.log(arr[v]);
  i++;
}

//  20
let input = "";
while (input.toLowerCase() !== "stop") {
  input = prompt("Enter something (type 'stop' to end):");
  if (input.toLowerCase() !== "stop") {
    console.log("You entered: " + input);
  }
}
console.log("Program ended.");


//   21
let i1 = 1;

do {
  console.log(i1);
  i1++;
} while (i1 <= 10);

// 22
let choice;

do {
  console.log("==== MENU ====");
  console.log("1. Say Hello");
  console.log("2. Show Date");
  console.log("3. Exit");

  // Ask the user for input
  choice = prompt("Enter your choice (1-3):");

  switch (choice) {
    case "1":
      console.log("Hello, welcome to the program!");
      break;
    case "2":
      console.log("Today's date is: " + new Date());
      break;
    case "3":
      console.log("Exiting... Goodbye!");
      break;
    default:
      console.log("Invalid choice! Please try again.");
  }

  console.log("\n");
} while (choice !== "3");

//  23
let num11 = parseInt(prompt("Enter a number to print its multiplication table:"));
let i2 = 1;

do {
  console.log(`${num11} x ${i2} = ${num11* i2}`);
  i2++;
} while (i2 <= 10);

//  24
let n = parseInt(prompt("Enter a number:"));
let i3 = 1;
let sum2 = 0;

do {
  sum2 = sum2 + i3;
  i3++;
} while (i3 <= n);

console.log("The sum of natural numbers up to " + n + " is: " + sum2);

//  25
const correctPassword = "12345";
let userPassword;

do {
  userPassword = prompt("Enter your password:");
  if (userPassword !== correctPassword) {
    console.log("Incorrect password. Try again!");
  }
} while (userPassword !== correctPassword);

console.log("Access granted! ");


//  26
let i4 = 1;

do {
  if (i4 % 2 === 0) {
    console.log(i4);
  }
  i4++;
} while (i4 <= 20);


//  27
let num5 = parseInt(prompt("Enter a number:"));
let count5 = 0;

do {
  count5++;
  num5 = Math.floor(num5 / 10);
} while (num5 > 0);

console.log("The number of digits is: " + count5);

//  28
let stri = prompt("Enter a string:");
let Reversed = "";
let i6 = str.length - 1;

do {
  Reversed += stri[i];
  i6--;
} while (i6 >= 0);

console.log("Reversed string: " + Reversed);

//  29
let i7 = 1;

do {
  let cube = i7 * i7 * i7;
  console.log(`Cube of ${i7} = ${cube}`);
  i7++;
} while (i7 <= 5);

//  30
let total = 0;
let Num;

do {
  Num = parseInt(prompt("Enter a number:"));
  total += Num;
  console.log("Current total: " + total);
} while (total <= 100);

console.log("Total exceeded 100! Final total: " + total);
