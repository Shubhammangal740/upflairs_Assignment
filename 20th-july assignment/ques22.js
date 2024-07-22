function isPowerOfTwo(num) {
    if (num <= 0) {
        return `${num} is not a power of 2.`;
    }
    return (num & (num - 1)) === 0 
        ? `${num} is a power of 2.` 
        : `${num} is not a power of 2.`;
}


const number = parseInt(prompt("Enter a number:"), 10);
const result = isPowerOfTwo(number);
console.log(result);
