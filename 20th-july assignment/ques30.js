// 30. . Check if a number is an automorphic number.

function isAutomorphic(number) {
  let square = number * number;
  return square.toString().endsWith(number.toString());
}

// Example usage
let number = 25;
if (isAutomorphic(number)) {
  console.log(`${number} is an Automorphic number.`);
} else {
  console.log(`${number} is not an Automorphic number.`);
}
