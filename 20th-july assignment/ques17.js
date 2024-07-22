function sortDescending(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    numbers.sort((a, b) => b - a);
    return `The numbers in descending order are ${numbers.join(', ')}.`;
}


const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const num3 = parseFloat(prompt("Enter the third number:"));
const result = sortDescending(num1, num2, num3);
console.log(result);
