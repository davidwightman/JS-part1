const num = 13;

function nthFibonacciNumber(num) {
	let startingNumber = 1;

	if (num <= 1) return num;
	else return nthFibonacciNumber(num - 1) + nthFibonacciNumber(num - 2);
}

console.log(nthFibonacciNumber(num));
