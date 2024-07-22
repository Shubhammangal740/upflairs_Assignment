// 40. Calculate the compound interest given principal, rate, and time

function calculateCompoundInterest(principal, rate, time) {
  let amount = principal * Math.pow(1 + rate / 100, time);
  let compoundInterest = amount - principal;
  return compoundInterest;
}

// Example usage
let principal = 1000; // Principal amount
let rate = 5; // Annual interest rate in percentage
let time = 2; // Time in years

let interest = calculateCompoundInterest(principal, rate, time);
console.log(`The compound interest is ${interest}.`);
