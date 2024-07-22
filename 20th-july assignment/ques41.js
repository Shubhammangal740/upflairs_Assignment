// 41. Check if a number is a vampire number or not

function isVampireNumber(number) {
  let strNumber = number.toString();
  if (strNumber.length % 2 !== 0) return false; // Must have an even number of digits

  let halfLength = strNumber.length / 2;
  let permutations = getPermutations(strNumber.split(""), halfLength);

  for (let [x, y] of permutations) {
    if (x[0] !== "0" && y[0] !== "0" && parseInt(x) * parseInt(y) === number) {
      return true;
    }
  }
  return false;
}

function getPermutations(arr, halfLength) {
  let results = [];
  let used = Array(arr.length).fill(false);

  function permute(path) {
    if (path.length === halfLength) {
      let remaining = arr.filter((_, i) => !used[i]);
      results.push([path.join(""), remaining.join("")]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(arr[i]);
      permute(path);
      path.pop();
      used[i] = false;
    }
  }

  permute([]);
  return results;
}

// Example usage
let number = 1260;
if (isVampireNumber(number)) {
  console.log(`${number} is a Vampire number.`);
} else {
  console.log(`${number} is not a Vampire number.`);
}
