var testNumber = 21;

function isAPrimeNumber (num) {
	var dividedBy = 2
	while (num > dividedBy) {
		if (num % dividedBy == 0){
			return false
		} else {
		dividedBy++
		}
	}
	return true
}
console.log(isAPrimeNumber(testNumber))