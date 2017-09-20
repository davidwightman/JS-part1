var exampleString = 'abbcccddddeeffff';
var exampleSubString = 'cccddddeef';

function matchSubString (str, subStr) {
	var idx = 0;
	j = 0;

	for (i = 0; i<str.length; i++){
		if(str[i] == subStr[j])
			j++
		else
			j = 0;

		if(j == 0)
			idx = i;
		else if (j == subStr.length)
			return idx
	}
	return -1
}

console.log(matchSubString(exampleString, exampleSubString))