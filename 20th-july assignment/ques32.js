// 32. Check if a number is a neon number or not.

function isNeonNumber(number) {
  let square = number * number;
  let sumOfDigits = 0;
  while (square > 0) {
    sumOfDigits += square % 10;
    square = Math.floor(square / 10);
  }
  return sumOfDigits === number;
}

// Example usage
let number = 9;
if (isNeonNumber(number)) {
  console.log(`${number} is a Neon number.`);
} else {
  console.log(`${number} is not a Neon number.`);
}
