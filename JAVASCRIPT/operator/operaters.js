let a=20;
let b=30;
let c=50;
let d=60;
 
// Arithmetic Operators

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

s=a+b+c;
console.log(a/3);

let length=25;
let width=15;
let area=length * width;
console.log("Area of Rectangle is " + area);

//  4
let Celsius=25;
let F;
F=(Celsius*(9/5))+32;
console.log( "Fahrenhiet " +F) ;

console.log("remainder is",a%c);
//assignment operators 
let x=10;
let y;
y=x+=10;
console.log("increase +=" + y);

//  7
let h=5;
let i;
i=h*=5;
console.log("multiplies *=" +i);

//  8
let j;
j=a-=3;
console.log("decrease -= " +j);

//  9
let k;
k=length/=2;
console.log("divide /= " + k);

//  10
let l;
l=a=length-b*h/j;
console.log("multiple opeator"+ l);y

//comparison operators


console.log(a==b);
console.log(a<b);
e="silambu"
f="silambu"
console.log(e==f);

console.log(100<=b)
g=60
h="60"
console.log(g===h);

//  increment and decrement  21
let m=10;
m++;
console.log("increment ++ " +m);

//  22
let n=10;
n--;
console.log("Decrement -- " + n);

//  23
let post=15;
post++;
console.log("post increment post ++ " + post);

//  24
let pre=15;
++pre;
console.log("Pre increment ++pre " +pre);

//  25
let two=25;
two++;
two--;
console.log("same expression ++ & -- " +two);

//  Ternary Operator  26
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log("Ternary operator even or odd : " + result);

//  27
let A = 15;
let B = 20;
let greater = (A > B) ? A : B;
console.log("The greater number is: " + greater);

//  28
let age=20;
let message = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Age 20 is "+message);

//  29
let Result = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log("given number 7 is " +Result);

//  30
let str = "vignesh";
let word = (str.length === 0) ? "String is empty" : "String is not empty";
console.log("Vignesh is string "+ word);

//  Bitwise Operators  31
let X=5;
let Y=3;
let res = X & Y;
console.log("Bitwise AND:", res);

//  32
let resu = a | b;
console.log("Bitwise OR:", resu);

//  33
let num1 = 8;
let num2 = 4;
let ress = num1 ^ num2; 
console.log("The bitwise XOR of", num1, "and", num2, "is:", ress);


//  34
 num = 6;  // Binary: 0110
let rees = num << 2; // Shift left by 2 bits
console.log("The result is:", rees);

//  35
let o = 5;  // Binary: 0101
let p = 3;  // Binary: 0011

// Bitwise Operators
let bitwiseAnd = o & p;   
let bitwiseOr  = o | p;   
let bitwiseXor = o ^ p;   

let q = true;
let r = false;
//Logical Operators
let logicalAnd = q && r;  
let logicalOr  = q || r;  

console.log("Bitwise AND (a & b):", bitwiseAnd);
console.log("Bitwise OR  (a | b):", bitwiseOr);
console.log("Bitwise XOR (a ^ b):", bitwiseXor);
console.log("Logical AND (x && y):", logicalAnd);
console.log("Logical OR  (x || y):", logicalOr);


// Bonus Mixed Tasks  36
// Declare variables of different data types
let name = "Vignesh";   // String
let Age = 25;            // Number
let isStudent = true;    // Boolean

// Perform operations
let greeting = "Hello, " + name + "!";       // String concatenation
let nextYearAge = Age + 1;                   // Number addition
let studentStatus = !isStudent;              // Boolean NOT operator
let checkAge = Age > 18 && isStudent;        // Logical operation

// Display the results
console.log("Greeting:", greeting);
console.log("Next Year Age:", nextYearAge);
console.log("Is Student (Before):", isStudent);
console.log("Is Student (After NOT):", studentStatus);
console.log("Check if Adult Student:", checkAge);








