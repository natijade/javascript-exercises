const palindromes = function (string) {
const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
const processedString = string
.toLowerCase()
.split('')
.filter((character) => alphanumerical.includes(character))
.join('');

const reversedString = processedString.split('').reverse().join('');

return reversedString === processedString

};

// .replace(/[^a-z0-9]/g, "")

// Do not edit below this line
module.exports = palindromes;
