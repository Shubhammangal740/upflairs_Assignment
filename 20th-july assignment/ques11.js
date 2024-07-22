function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote.";
    } else {
        return "You are not eligible to vote.";
    }
}


const age = parseInt(prompt("Enter your age:"), 10);
const result = checkVotingEligibility(age);
console.log(result);
