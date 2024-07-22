function isCenturyYear(year) {
    if (year % 100 === 0) {
        return `${year} is a century year.`;
    } else {
        return `${year} is not a century year.`;
    }
}


const year = parseInt(prompt("Enter a year:"), 10);
const result = isCenturyYear(year);
console.log(result);
