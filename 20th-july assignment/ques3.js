function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return `${num} is even.`;
    } else {
        return `${num} is odd.`;
    }
}

const number = parseFloat(prompt("Enter a number:"));
const result = isEvenOrOdd(number);
console.log(result);
