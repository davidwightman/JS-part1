const arrayTest = [1, 2, 3, 5, 6];

function largestSum(arr) {
	let arrayLength = arr.length;
	let largest = arr[0];
	let secondLargest = arr[1];

	if (arrayLength < 2) {
		return null;
	}

	// if (biggest<second){
	//   biggest = arr[1];
	//   second = arr[0];
	// }

	for (let i = 2; i < len; i++) {
		// if(arr[i] > biggest){
		//    second = biggest;
		//    biggest = arr[i];
		//  }
		// else if (arr[i]>second){
		//    second = arr[i];
		// }
	}
	// return biggest + second;
}

console.log(largestSum(arrayTest));
