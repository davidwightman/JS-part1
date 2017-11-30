const arrOne = [1, 2, 3, 5, 8];
const arrTwo = [4, 6, 7, 9, 10];

function sortedArray(arr1, arr2) {
	let newSortedArray = [];
	arr1Elment = arr1[0];
	arr2Element = arr2[0];
	i = 1;
	j = 1;

	while (arr1Elment || arr2Element) {
		if (arr1Elment < arr2Element || (arr1Elment && !arr2Element)) {
			newSortedArray.push(arr1Elment);
			arr1Elment = arr1[i++];
		} else {
			newSortedArray.push(arr2Element);
			arr2Element = arr2[j++];
		}
	}
	return newSortedArray;
}

console.log(sortedArray(arrOne, arrTwo));
