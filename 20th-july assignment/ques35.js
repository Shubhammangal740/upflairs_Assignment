// 35. Check if a number is a buzz number or not

function isBuzzNumber(number) {
  return number % 10 === 7 || number % 7 === 0;
}

// Example usage
let number = 63;
if (isBuzzNumber(number)) {
  console.log(`${number} is a Buzz number.`);
} else {
  console.log(`${number} is not a Buzz number.`);
}
