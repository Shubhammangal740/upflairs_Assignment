function checkVowelOrConsonant(char) {
    const vowels = 'aeiouAEIOU';
    if (vowels.includes(char)) {
        return `${char} is a vowel.`;
    } else if (char.length === 1 && /[a-zA-Z]/.test(char)) {
        return `${char} is a consonant.`;
    } else {
        return `${char} is not a valid letter.`;
    }
}


const character = prompt("Enter a character:").charAt(0);
const result = checkVowelOrConsonant(character);
console.log(result);
