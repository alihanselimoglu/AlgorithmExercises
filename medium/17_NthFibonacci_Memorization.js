/*
return the nth index of fibonacci 
solve with memorization(DP)
*/

export const NthFibonacci_Memorization = (n, prev = []) => {
  if (prev[n] != null) return prev[n];
  let result;

  if (n === 1) return 0;
  if (n === 2) return 1;

  result =
    NthFibonacci_Memorization(n - 1, prev) +
    NthFibonacci_Memorization(n - 2, prev);
  prev[n] = result;

  return result;
};
