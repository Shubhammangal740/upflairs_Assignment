// 38. Find the average of numbers in an array

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
let average = sum / numbers.length;

console.log(`The average is ${average}.`);
