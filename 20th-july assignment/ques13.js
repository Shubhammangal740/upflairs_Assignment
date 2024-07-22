function calculateTriangleArea(base, height) {
    const area = 0.5 * base * height;
    return `The area of the triangle is ${area}.`;
}


const base = parseFloat(prompt("Enter the base of the triangle:"));
const height = parseFloat(prompt("Enter the height of the triangle:"));
const result = calculateTriangleArea(base, height);
console.log(result);
