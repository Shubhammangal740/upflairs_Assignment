// 37.  Determine if a number is a harshad number or not

let number = 18;
let sumOfDigits = number
  .toString()
  .split("")
  .reduce((acc, digit) => acc + parseInt(digit), 0);

if (number % sumOfDigits === 0) {
  console.log(`${number} is a Harshad number.`);
} else {
  console.log(`${number} is not a Harshad number.`);
}
