const stringExample = 'this is an example of the string';

function removeDuplicateCharacters(str) {
	let currentCharacter;
	let checkedCharacters = {};
	let newString = [];
	for (let i = 0; i < str.length; i++) {
		currentCharacter = str[i];
		if (checkedCharacters[currentCharacter]) {
			checkedCharacters[currentCharacter]++;
		} else checkedCharacters[currentCharacter] = 1;
	}
	for (let j in checkedCharacters) {
		if (checkedCharacters[j] == 1) newString.push(j);
	}
	return newString.join('');
}

console.log(removeDuplicateCharacters(stringExample));
