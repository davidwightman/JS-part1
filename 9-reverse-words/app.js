const cat = 'This is the sentence to be reversed';

function reverseWordsInASentence(sentence) {
	return sentence
		.split(' ')
		.reverse()
		.join(' ');
}
console.log(reverseWordsInASentence(cat));
