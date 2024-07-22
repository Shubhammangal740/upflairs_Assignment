// 43. Determine if a number is a strobo number or not.

function isStrobogrammatic(num) {
  const map = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  let strNum = num.toString();
  let left = 0;
  let right = strNum.length - 1;

  while (left <= right) {
    if (!map[strNum[left]] || map[strNum[left]] !== strNum[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Example usage
let number = 69;
if (isStrobogrammatic(number)) {
  console.log(`${number} is a Strobogrammatic number.`);
} else {
  console.log(`${number} is not a Strobogrammatic number.`);
}
