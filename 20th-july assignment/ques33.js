// 33. Calculate the sum of squares of first n natural numbers

function sumOfSquares(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

// Example usage
let n = 5;
console.log(
  `The sum of the squares of the first ${n} natural numbers is ${sumOfSquares(
    n
  )}.`
);
