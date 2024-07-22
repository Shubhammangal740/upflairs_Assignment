function isPerfectSquare(num) {
    if (num < 0) {
        return `${num} is not a perfect square.`;
    }
    const sqrt = Math.sqrt(num);
    if (sqrt === Math.floor(sqrt)) {
        return `${num} is a perfect square.`;
    } else {
        return `${num} is not a perfect square.`;
    }
}


const number = parseFloat(prompt("Enter a number:"));
const result = isPerfectSquare(number);
console.log(result);
