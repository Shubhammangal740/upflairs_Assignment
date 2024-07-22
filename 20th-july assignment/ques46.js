// 46. Calculate the sum of cubes of first n natural numbers.

function sumOfCubes(n) {
  let sum = ((n * (n + 1)) / 2) ** 2;
  return sum;
}

// Example usage
let n = 5;
console.log(
  `The sum of the cubes of the first ${n} natural numbers is ${sumOfCubes(n)}.`
);
