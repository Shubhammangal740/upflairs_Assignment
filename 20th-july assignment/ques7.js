function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return `The factorial of ${num} is ${result}.`;
}

// Example usage:
const number = parseInt(prompt("Enter a number:"), 10);
const result = factorial(number);
console.log(result);
