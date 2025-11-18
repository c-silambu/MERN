
//  1
let num = Math.floor(Math.random() * 10) ;
console.log(num);

//  2
let value = 12.34567;
let result = Number(value.toFixed(2));
console.log(result);

//  3
let arr = [10, 45, 2, 99, 23];

let max = Math.max(...arr);
let min = Math.min(...arr);

console.log(max, min);

//  4
let arr1 = [4, 9, 16, 25];
let roots = arr1.map(num => Math.sqrt(num));

console.log(roots);

//  5
let random = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
console.log(random);

//  6
let a = 25, b = 80;
let diff = Math.abs(a - b);
console.log(diff);

//  7
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

//  8
let P = 1000; // principal
let r = 0.05; // 5%
let n = 1;    // yearly
let t = 2;    // 2 years

let amount = P * Math.pow((1 + r/n), n * t);
console.log(amount);

//  9
let radius = 7;
let area = Math.PI * Math.pow(radius, 2);

console.log(area);

//  10
let num1 = 49;
let result1 = Math.sqrt(num1);

console.log(Number.isInteger(result1)); // true or false

//  11
let value1 = 4.6;

console.log(Math.ceil(value1));  // 5
console.log(Math.floor(value1)); // 4

//  12
let a1 = 3, b1 = 4;
console.log(Math.pow(a1, b1)); // 81

//  13
let nums = [];

for (let i = 0; i < 10; i++) {
  nums.push(Math.floor(Math.random() * 100)); 
}

let sum = nums.reduce((a, b) => a + b, 0);
let avg = sum / nums.length;

console.log(nums, avg);

//  14
let rad = Math.PI / 2;
let deg = rad * (180 / Math.PI);
console.log(deg);

let degrees = 90;
let radians = degrees * (Math.PI / 180);
console.log(radians);

//  15
let n1 = 5;
let fact = 1;

for (let i = 1; i <= n1; i++) {
  fact *= i;
}

console.log(fact);


