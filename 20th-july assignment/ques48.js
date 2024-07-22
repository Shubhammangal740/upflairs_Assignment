// 48. . Determine if a number is a narcissistic number or not.

function isNarcissistic(value) {
  let digits = value.toString().split("");
  let power = digits.length;
  let sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), power),
    0
  );
  return sum === value;
}

// Example usage:
console.log(isNarcissistic(153)); // true
console.log(isNarcissistic(9474)); // true
console.log(isNarcissistic(123)); // false
