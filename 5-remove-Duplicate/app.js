var testArray = [1, 2, 3, 4, 4, 4, 5, 5, 6 ,7]

function removeDuplicate(arr) {
	var uniqueArray = arr.filter(function(item, pos){
		return arr.indexOf(item) == pos
 	})
	return uniqueArray
}

console.log(removeDuplicate(testArray));