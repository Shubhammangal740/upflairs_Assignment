// 28. Check if a number is a happy number or not

function isHappy(number) {
  let seen = new Set();
  while (number !== 1 && !seen.has(number)) {
    seen.add(number);
    let sum = 0;
    while (number > 0) {
      let digit = number % 10;
      sum += digit * digit;
      number = Math.floor(number / 10);
    }
    number = sum;
  }
  return number === 1;
}

// Example usage
let number = 19;
if (isHappy(number)) {
  console.log(`${number} is a Happy number.`);
} else {
  console.log(`${number} is not a Happy number.`);
}
