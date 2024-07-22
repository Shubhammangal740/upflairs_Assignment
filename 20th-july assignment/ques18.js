function sumOfDigits(num) {
    const numStr = Math.abs(num).toString(); 
    let sum = 0;
    
    for (let char of numStr) {
        if (!isNaN(char)) { 
            sum += parseInt(char, 10);
        }
    }
    
    return `The sum of the digits is ${sum}.`;
}


const number = parseInt(prompt("Enter a number:"), 10);
const result = sumOfDigits(number);
console.log(result);
