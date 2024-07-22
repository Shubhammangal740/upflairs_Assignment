function checkNumber(num) {
    if (num > 0) {
        return "The number is positive.";
    } else if (num < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}

// Example usage:
const number = parseFloat(prompt("Enter a number:"));
const result = checkNumber(number);
console.log(result);
