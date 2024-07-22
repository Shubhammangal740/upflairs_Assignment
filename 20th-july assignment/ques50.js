// 50. Reverse a number and check if it is the same as the original.

let number = 121;
let reversedNumber = parseInt(number.toString().split("").reverse().join(""));

if (number === reversedNumber) {
  console.log(`${number} is the same as its reverse.`);
} else {
  console.log(`${number} is not the same as its reverse.`);
}
