function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return `${num1} is the largest.`;
    } else if (num2 >= num1 && num2 >= num3) {
        return `${num2} is the largest.`;
    } else {
        return `${num3} is the largest.`;
    }
}

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const num3 = parseFloat(prompt("Enter the third number:"));
const result = findLargest(num1, num2, num3);
console.log(result);
