const cat = 'This is the sentence to be reversed';

function reverseWordsInPlace(sentence) {
	return sentence
		.split('')
		.reverse()
		.join('')
		.split(' ')
		.reverse()
		.join(' ');
}
console.log(reverseWordsInPlace(cat));
