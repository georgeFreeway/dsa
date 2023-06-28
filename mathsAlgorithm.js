//find the fibonacci sequence of a given number and determine the Big O notation
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(5));

//find the sum of first n natural numbers and determine the Big O notation
function summation(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
console.log(summation(10));

//given an integer n, find the factorial of that integer
function factorial(n) {
  let result = 1;
  for (let i = 2; i < n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(10));

//given a natural number n, determine if the given number is prime or not
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
//O(sqrt(n))
console.log(isPrime(5));

//given a positive integer, determine if it is a power of two
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

function isPowerOfTwoBitwise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(2));
