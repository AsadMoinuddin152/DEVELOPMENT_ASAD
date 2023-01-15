function divide(dividend, divisor) {
    var quotient = 0;
    var sign = 1;
    if (dividend < 0) {
    sign = -sign;
    dividend = -dividend;
    }
    if (divisor < 0) {
    sign = -sign;
    divisor = -divisor;
    }
    while (dividend >= divisor) {
    dividend -= divisor;
    quotient++;
    }
    console.log(sign * quotient)
}
divide(10,3);
