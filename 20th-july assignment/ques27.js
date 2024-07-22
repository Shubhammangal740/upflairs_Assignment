// 27. Find the largest among four numbers.

let num1 = 10;
let num2 = 5;
let num3 = 20;
let num4 = 15;

let largest;

if (num1 >= num2) {
  largest = num1;
} else {
  largest = num2;
}

if (num3 > largest) {
  largest = num3;
}

if (num4 > largest) {
  largest = num4;
}

console.log("Largest number is:", largest);
