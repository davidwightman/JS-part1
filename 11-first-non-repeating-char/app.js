const stringExample = 'this is an example of the string';

function firsNonRepeating(str) {
	let currentCharacter;
	let checkedLetters = {};
	for (let i = 0; i < str.length; i++) {
		currentCharacter = str[i];
		if (checkedLetters[currentCharacter]) {
			checkedLetters[currentCharacter]++;
		} else checkedLetters[currentCharacter] = 1;
	}
	for (var j in checkedLetters) {
		if (checkedLetters[j] == 1) return j;
	}
}

console.log(firsNonRepeating(stringExample));
