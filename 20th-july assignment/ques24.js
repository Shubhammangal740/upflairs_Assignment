function daysInMonth(year, month) {
    
    return new Date(year, month + 1, 0).getDate();
}


const year = parseInt(prompt("Enter the year:"), 10);
const month = parseInt(prompt("Enter the month (1-12):"), 10) - 1; 
if (month >= 0 && month <= 11) {
    const result = daysInMonth(year, month);
    console.log(`Number of days in the month: ${result}`);
} else {
    console.log("Invalid month. Please enter a value between 1 and 12.");
}
