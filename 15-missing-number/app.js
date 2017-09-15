var arrTest = [1, 3, 5, 2, 6]

function missingNumber (arr) {

var n = arr.length+1;
var actualSum = arr.reduce(function(sum, value){
	return sum + value
}, 0);
var expectedSum = n* (n+1)/2;

return expectedSum - actualSum;
}

console.log(missingNumber(arrTest))