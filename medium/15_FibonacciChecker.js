/*Using the JavaScript language, have the function 
FibonacciChecker(num) return the string yes if the number
given is part of the Fibonacci sequence. This sequence is 
defined by: Fn = Fn-1 + Fn-2, 
which means to find Fn you add the previous two numbers up.
The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. 
If num is not in the Fibonacci
sequence, return the string no. */

export function FibonacciChecker(num) {
  let m = 0;
  let n = 1;
  let temp = 0;
  for (let i = 2; num > temp; i++) {
    temp = m + n;
    m = n;
    n = temp;
    if (num === temp) return 'yes';
  }
  return 'no';
}
