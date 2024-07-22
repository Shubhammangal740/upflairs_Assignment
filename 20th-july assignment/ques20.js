function isPerfectNumber(num) {
    if (num <= 0) {
        return `${num} is not a perfect number.`;
    }
    
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    
    if (sum === num) {
        return `${num} is a perfect number.`;
    } else {
        return `${num} is not a perfect number.`;
    }
}


const number = parseInt(prompt("Enter a number:"), 10);
const result = isPerfectNumber(number);
console.log(result);
