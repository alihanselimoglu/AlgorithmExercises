/*
return the nth index of fibonacci
*/


export const NthFibonacci = (n) => {
    if (n === 1) return 0
    if (n === 2) return 1
    return NthFibonacci(n - 1) + NthFibonacci(n - 2)
}
