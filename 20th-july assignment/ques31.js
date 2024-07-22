// 31. Determine if a given number is strong or not.

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

function isStrongNumber(number) {
  let sum = 0;
  let temp = number;
  while (temp > 0) {
    let digit = temp % 10;
    sum += factorial(digit);
    temp = Math.floor(temp / 10);
  }
  return sum === number;
}

// Example usage
let number = 145;
if (isStrongNumber(number)) {
  console.log(`${number} is a Strong number.`);
} else {
  console.log(`${number} is not a Strong number.`);
}
