//  1
let fruits = ["Apple", "Banana", "Orange", "Mango"];
fruits.push("Pineapple");
console.log(fruits);

//  2
//let fruit = ["Apple", "Banana", "Orange"];
fruits.pop();
console.log(fruits);

//  3
fruits.unshift("Grapes");
console.log(fruits);

//  4
//let fruits = ["Apple", "Banana", "Orange"];
fruits.shift();
console.log(fruits);

//  5
//let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.length);

//  6
// let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.join(", "));

//  7
let colors = ["Red", "Blue", "Green", "Yellow"];
console.log(colors[colors.length -2]);

//  8
let names = ["Vignesh", "Viki", "Vicky"];
names.push("Silambu");
names.push("Sakthi");
names.shift();
console.log(names);

//  9
//let fruits = ["apple", "banana", "orange"];
console.log("I like " + fruits.join(", "));

//  10
let queue = [];
// Add items
queue.push("Task1");
queue.push("Task2");
queue.push("Task3");
console.log(queue);

// Remove last item
queue.pop();
console.log(queue);


//  Searching and Checking (indexOf, includes, concat)


//  11
let animals = ["cat", "dog", "rabbit", "cow"];
console.log(animals.includes("dog"));  // true

//  12
let pets = ["parrot", "cat", "fish"];
console.log(pets.indexOf("cat"));  // 1

//  13
let a = [1, 2, 3];
let b = [4, 5, 6];
let result = a.concat(b);
console.log(result);

//  14
let boys = ["Arun", "Kishore"];
let girls = ["Priya", "Divya"];
let students = boys.concat(girls);
console.log(students);

//  15
//let animals = ["tiger", "cat", "elephant"];

if (!animals.includes("lion")) {
  animals.push("lion");
}

console.log(animals);

//  16
let cities = ["Mumbai", "Delhi", "Chennai", "Pune"];
console.log(cities.indexOf("Chennai"));  // 2

//  17
let arr1 = ["a", "b"];
let arr2 = ["c", "d"];
let arr3 = ["e", "f"];

let merged = arr1.concat(arr2, arr3);
console.log(merged);

//  18
//let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("watermelon"));  // false

//  19
let n1 = [5, 2, 9];
let n2 = [1, 7, 3];

let combined = n1.concat(n2).sort();
console.log(combined);

//  20
let s1 = ["Math"];
let s2 = ["English"];
let s3 = ["Science"];

let subjects = s1.concat(s2, s3);
console.log(subjects);


//   Slicing and Splicing (slice, splice)

//  21
let arr4 = [10, 20, 30, 40, 50];
console.log(arr4.slice(1, 4));  // [20, 30, 40]

//  22
//let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1);
console.log(fruits);

//  23
//let fruits = ["apple", "cherry"];
fruits.splice(1, 0, "grape");
console.log(fruits);

//  24
let arr = [5, 10, 15, 20, 25];
console.log(arr.slice(0, 3));   // [5, 10, 15]

//  25
//let animals = ["cat", "dog", "lion"];
animals.splice(1, 1, "tiger");
console.log(animals);

//  26
let nums = [1, 2, 3, 4, 5];
nums.splice(1, 2);
console.log(nums);   // [1, 4, 5]

//  27
//let colors = ["Red", "Blue"];
colors.splice(1, 0, "Green", "Yellow");
console.log(colors);

//  28
//let arr = [10, 20, 30, 40, 50];
console.log(arr.slice(-2));   // [40, 50]

//  29
//let arr = [1, 2, 3, 4];
let copy = arr.slice();
console.log(copy);

//  30
let original = [10, 20, 30];
let cloned = original.slice();
cloned.push(40);
console.log("Original:", original);
console.log("Cloned:", cloned);

//  31
//let nums = [10, 20, 30, 40];
nums.forEach(n => console.log(n));

//  32
//let arr = [1, 2, 3, 4, 5];
let doubled = arr.map(n => n * 2);
console.log(doubled);

//  33
//let names = ["arun", "vijay", "kiran"];
let upper = names.map(name => name.toUpperCase());
console.log(upper);

//  34
//let nums = [10, 15, 20, 25, 30];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens);

//  35
//let names = ["Ajay", "Bala", "Anu", "Deepa"];
let filtered = names.filter(n => !n.startsWith("A"));
console.log(filtered);

//  36
//let students = ["Arun", "Kiran", "Siva"];
students.forEach(name => console.log("Student: " + name));

//  37
//let nums = [2, 4, 6, 8];
let squares = nums.map(n => n * n);
console.log(squares);

//  38
//let nums = [10, -5, 8, -3, 12];
let positive = nums.filter(n => n >= 0);
console.log(positive);

//  39
//let names = ["Arun", "Priya", "Kumar"];
let titled = names.map(n => "Mr./Ms. " + n);
console.log(titled);

//  40
let marks = [40, 55, 75, 90, 35];
let pass = marks.filter(m => m >= 50);
console.log(pass);


// Advanced Operations (reduce, sort,reverse, find, some, every)

//  41
//let arr = [5, 10, 15, 20];
let sum = arr.reduce((total, num) => total + num, 0);
console.log(sum);

//  42
//let arr = [2, 3, 4, 5];
let product = arr.reduce((total, num) => total * num, 1);
console.log(product);

//  43
// let arr = [30, 10, 50, 20, 40];
arr.sort((a, b) => a - b);
console.log(arr);

//  44
// let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

//  45
//let nums = [10, 60, 30, 80, 40];
let result2 = nums.find(n => n > 50);
console.log(result2);

//  46
//let nums = [10, 50, 80, 30];
let hasAbove100 = nums.some(n => n > 100);
console.log(hasAbove100);

//  47
//let nums = [2, 4, 6, 8];
let allPositive = nums.every(n => n > 0);
console.log(allPositive);

//  48
//let names = ["Arun", "Kiran", "Bala", "Siva"];
names.sort();
console.log(names);

//  49
//let names = ["Arun", "Kiran", "Bala", "Siva"];
names.sort().reverse();
console.log(names);

//  50
//let nums = [1, 2, 3, 4, 5, 6, 7, 8];

let evenSum = nums
  .filter(n => n % 2 === 0)
  .reduce((total, num) => total + num, 0);

console.log(evenSum);