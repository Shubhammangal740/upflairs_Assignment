function isDivisible(dividend, divisor) {
    if (divisor === 0) {
        return "Division by zero is not allowed.";
    }
    if (dividend % divisor === 0) {
        return `${dividend} is divisible by ${divisor}.`;
    } else {
        return `${dividend} is not divisible by ${divisor}.`;
    }
}


const dividend = parseFloat(prompt("Enter the dividend:"));
const divisor = parseFloat(prompt("Enter the divisor:"));
const result = isDivisible(dividend, divisor);
console.log(result);
