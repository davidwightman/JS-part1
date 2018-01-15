const testNumber = 21;

function isAPrimeNumber(num) {
	let dividedBy = 2;
	while (num > dividedBy) {
		if (num % dividedBy == 0) {
			return false;
		} else {
			dividedBy++;
		}
	}
	return true;
}
console.log(isAPrimeNumber(testNumber));
