const testNumber = 75;
const factorsOfTestNumber = [];

function primeFactors(num) {
	let divisor = 2;
	while (num > 2) {
		if (num % divisor == 0) {
			factorsOfTestNumber.push(divisor);
			num = num / divisor;
		} else {
			divisor++;
		}
	}
	return factorsOfTestNumber;
}
console.log(primeFactors(testNumber));
