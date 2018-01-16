function greatestCommonDivisor(num1, num2) {
  let divisor = 2,
    greatestDivisor = 1;

  if (num1 < 2 || num2 < 2) return 1;

  while (num1 >= divisor && num2 >= divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

console.log(greatestCommonDivisor(3423, 345632));
