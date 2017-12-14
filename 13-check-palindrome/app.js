const wordTest = 'potato';

const checkForPalindrome = str =>
	str ===
	str
		.split('')
		.reverse()
		.join('');

console.log(checkForPalindrome(wordTest));
