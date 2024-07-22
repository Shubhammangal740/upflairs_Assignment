// 47. Check if a number is a niven number or not.

let number = 18;
let sumOfDigits = number
  .toString()
  .split("")
  .reduce((acc, digit) => acc + parseInt(digit), 0);

if (number % sumOfDigits === 0) {
  console.log(`${number} is a Niven number.`);
} else {
  console.log(`${number} is not a Niven number.`);
}
