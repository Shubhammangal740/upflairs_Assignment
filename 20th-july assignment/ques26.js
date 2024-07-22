function isLeapYear(year) {
    return (year % 4 === 0) 
        ? (year % 100 === 0) 
            ? (year % 400 === 0) 
                ? `${year} is a leap year.` 
                : `${year} is not a leap year.` 
            : `${year} is a leap year.` 
        : `${year} is not a leap year.`;
}


const year = parseInt(prompt("Enter a year:"), 10);
const result = isLeapYear(year);
console.log(result);
