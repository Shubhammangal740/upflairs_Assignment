// 49. Check if a number is a happy prime or not

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

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function isHappyPrime(number) {
  return isHappy(number) && isPrime(number);
}

// Example usage:
console.log(isHappyPrime(7)); // true (7 is both happy and prime)
console.log(isHappyPrime(19)); // true (19 is both happy and prime)
console.log(isHappyPrime(20)); // false (20 is neither happy nor prime)
