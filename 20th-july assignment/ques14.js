function isPalindrome(num) {
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');
    if (numStr === reversedStr) {
        return `${num} is a palindrome.`;
    } else {
        return `${num} is not a palindrome.`;
    }
}


const number = parseInt(prompt("Enter a number:"), 10);
const result = isPalindrome(number);
console.log(result);
