var testNumber = 75;
var factorsOfTestNumber = [];

function primeFactors(num){
	var divisor = 2;
	while ( num > 2 ) {
		if (num % divisor == 0) {
		factorsOfTestNumber.push(divisor);
		num = num / divisor;
	} else {
		divisor++;
	}
}
	return factorsOfTestNumber;
}
console.log(primeFactors(testNumber))