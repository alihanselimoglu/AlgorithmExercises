/*Using the JavaScript language, have the function 
PrimeMover(num) return the numth prime number. 
The range will be from 1 to 10^4. For example: 
if num is 16 the output should be 53 as 53 is the 16th prime number. */

export const PrimeMover = (num) => {
    let index = 0
    let prime = 2
    while (index != num) {
        if (isPrime(prime)) index++
        prime++
    }

    return prime - 1
}

const isPrime = (num) => {
    if (num == 2) return true
    if (num <= 1) return false
    for (let i = 2; i <= parseInt(num / 2); i++) {
        if (num % i == 0) return false
    }
    return true
}