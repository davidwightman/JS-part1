const numberTest = 100201;

function countTotalNumbersOfZeros(num) {
	let total = 0;
	while (num > 0) {
		total += Math.floor(num / 10);
		num = num / 10;
	}
	return total;
}
console.log(countTotalNumbersOfZeros(numberTest));
