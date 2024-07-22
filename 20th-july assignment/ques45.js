// 45. . Find the third largest element in an array.

let numbers = [12, 13, 1, 10, 34, 16];
let first = -Infinity,
  second = -Infinity,
  third = -Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > first) {
    third = second;
    second = first;
    first = numbers[i];
  } else if (numbers[i] > second) {
    third = second;
    second = numbers[i];
  } else if (numbers[i] > third) {
    third = numbers[i];
  }
}

console.log(`The third largest element is ${third}.`);
