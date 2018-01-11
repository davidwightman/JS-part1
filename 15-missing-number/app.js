const arrTest = [1, 3, 5, 2, 6];

function missingNumber(arr) {
	let n = arr.length + 1;
	let actualSum = arr.reduce(function(sum, value) {
		return sum + value;
	}, 0);
	var expectedSum = n * (n + 1) / 2;

	return expectedSum - actualSum;
}

console.log(missingNumber(arrTest));
