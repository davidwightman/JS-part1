const testArray = [1, 2, 3, 4, 4, 4, 5, 5, 6, 7];

function removeDuplicate(arr) {
	const uniqueArray = arr.filter(function(item, pos) {
		// console.log(arr.indexOf(item) + ' and ' + pos);
		return arr.indexOf(item) === pos;
	});
	return uniqueArray;
}

console.log(removeDuplicate(testArray));
