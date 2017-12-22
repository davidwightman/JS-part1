const arrayTest = [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13];
const sumTest = 17;

function sumOfTwo(arr, sum) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length - 1; j++) {
			if (arr[i] + arr[j] == sum) return true;
		}
	}
	return false;
}

console.log(sumOfTwo(arrayTest, sumTest));
