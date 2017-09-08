var wordTest = 'mom'

function checkForPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(checkForPalindrome(wordTest))