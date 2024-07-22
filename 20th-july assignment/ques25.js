function calculatePerimeter(length, width) {
    const perimeter = 2 * (length + width);
    return `The perimeter of the rectangle is ${perimeter}.`;
}


const length = parseFloat(prompt("Enter the length of the rectangle:"));
const width = parseFloat(prompt("Enter the width of the rectangle:"));
const result = calculatePerimeter(length, width);
console.log(result);
