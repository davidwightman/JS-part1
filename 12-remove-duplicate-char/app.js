var stringExample = 'this is an example of the string'

function removeDuplicateCharacters(str){
	var currentCharacter;
	var checkedCharacters = {};
	var newString = [];
	for (var i = 0; i < str.length; i++){
		currentCharacter = str[i];
		if (checkedCharacters[currentCharacter]) {
			checkedCharacters[currentCharacter]++;
		} else 
			checkedCharacters[currentCharacter] = 1;
		
	}
	for (var j in checkedCharacters){
		if (checkedCharacters[j]==1)
			newString.push(j);
	}
	return newString.join('');
}

console.log(removeDuplicateCharacters(stringExample))