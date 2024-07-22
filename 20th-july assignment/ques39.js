// 39. Check if a number is a duck number or not

let number = 1023;
let strNumber = number.toString();
let isDuck = strNumber.includes("0") && strNumber[0] !== "0";

if (isDuck) {
  console.log(`${number} is a Duck number.`);
} else {
  console.log(`${number} is not a Duck number.`);
}
