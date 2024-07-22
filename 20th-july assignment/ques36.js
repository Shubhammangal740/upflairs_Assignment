// 36. Check if a number is a spy number or not.

let number = 1124;
let digits = String(number).split("").map(Number);
let sum = digits.reduce((a, b) => a + b, 0);
let product = digits.reduce((a, b) => a * b, 1);

if (sum === product) {
  console.log(`${number} is a Spy number.`);
} else {
  console.log(`${number} is not a Spy number.`);
}
