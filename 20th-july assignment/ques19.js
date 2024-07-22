function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isStrongNumber(num) {
    const numStr = num.toString();
    let sumOfFactorials = 0;
    
    for (let char of numStr) {
        const digit = parseInt(char, 10);
        sumOfFactorials += factorial(digit);
    }
    
    if (sumOfFactorials === num) {
        return `${num} is a strong number.`;
    } else {
        return `${num} is not a strong number.`;
    }
}


const number = parseInt(prompt("Enter a number:"), 10);
const result = isStrongNumber(number);
console.log(result);
