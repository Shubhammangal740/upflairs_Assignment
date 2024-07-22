// 44. Check if a number is a smith number or not.

function sumOfDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

function sumOfPrimeFactors(num) {
  let sum = 0;
  let factor = 2;
  while (num > 1) {
    while (num % factor === 0) {
      sum += sumOfDigits(factor);
      num /= factor;
    }
    factor++;
  }
  return sum;
}

function isSmithNumber(num) {
  if (num <= 1) return false;
  let sumDigits = sumOfDigits(num);
  let sumPrimeFactors = sumOfPrimeFactors(num);
  return sumDigits === sumPrimeFactors;
}

// Example usage
let number = 666;
if (isSmithNumber(number)) {
  console.log(`${number} is a Smith number.`);
} else {
  console.log(`${number} is not a Smith number.`);
}
