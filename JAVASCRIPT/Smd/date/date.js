
//  1
const now = new Date();
console.log(now);

//  2
const today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth() + 1);  // Month starts from 0 (0 = Jan)
console.log(today.getDate());

//  3
const now1 = new Date();
const currentYear = now1.getFullYear();
const lastDay = new Date(currentYear, 11, 31);

const diff = lastDay - now1;
const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

console.log(daysLeft);

//  4
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today1 = new Date();
console.log(days[today.getDay()]);

//  5
const d1 = new Date("2024-10-10");
const d2 = new Date("2024-08-15");

if (d1 < d2) {
  console.log("d1 is earlier");
} else {
  console.log("d2 is earlier");
}

//  6
const date = new Date();
date.setDate(date.getDate() + 10);
console.log(date);

//  7
function getAge(birth) {
  const today = new Date();
  const dob = new Date(birth);

  let age = today.getFullYear() - dob.getFullYear();

  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age;
}

console.log(getAge("2000-05-20"));

//  8
const d = new Date();

const day = String(d.getDate()).padStart(2, "0");
const month = String(d.getMonth() + 1).padStart(2, "0");
const year = d.getFullYear();

console.log(`${day}-${month}-${year}`);

//  9
function daysBetween(d1, d2) {
  const diff = Math.abs(new Date(d2) - new Date(d1));
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

console.log(daysBetween("2024-01-01", "2024-02-01"));

//  10
const now2 = new Date();

const first = new Date(now2.getFullYear(), now2.getMonth(), 1);
const last = new Date(now2.getFullYear(), now2.getMonth() + 1, 0);

console.log("First:", first);
console.log("Last:", last);

//  11
const now3 = new Date();

const h = String(now3.getHours()).padStart(2, "0");
const m = String(now3.getMinutes()).padStart(2, "0");
const s = String(now3.getSeconds()).padStart(2, "0");

console.log(`${h}:${m}:${s}`);

//  12
const today2 = new Date().getDay();

if (today2 === 0 || today2 === 6) {
  console.log("Weekend");
} else {
  console.log("Weekday");
}

//  13
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const now4 = new Date();
console.log(months[now4.getMonth()]);

//  14
const future = new Date("2025-01-01");
const now5 = new Date();

const diff1 = future - now5;
const days2 = Math.floor(diff1 / (1000 * 60 * 60 * 24));

console.log(`Days left: ${days2}`);

//  15
const now6 = new Date();
now.setHours(now6.getHours() + 1);
console.log(now6);
