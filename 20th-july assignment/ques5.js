function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}


const numbers = [1, -2, 3, 4, -5, 6];
const result = sumOfPositiveNumbers(numbers);
console.log(`The sum of positive numbers is: ${result}`);
