// experiment with numbers and console.log
console.log(42000);
// note the comma defines two distinct numbers in output
console.log(42,000);

console.log(42, 17, 56, 34, 11, 4.35, 32);
console.log(3.4, "hello", 45);

/*
JavaScript octal literal represented by 0o12 is equivalent to 
the decimal number 10. This is because the digits in the octal system are
 0, 1, 2, 3, 4, 5, 6, and 7. 
 In octal, each digit's place represents powers of 8.

break down of '0o12':

furthest right digit is 2, representing 2 * 8^0 (which is 2).
furthest left digit is 1, representing 1 * 8^1 (which is 8).
Adding these together, 2 + 8 equals 10 in the decimal system. 
0o12 in octal is equivalent to 10 in decimal.
*/
console.log(42,0o0);
console.log(0o0);
console.log(0o12);