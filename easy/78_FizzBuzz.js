/****************************************************************
 *                  CODERBYTE FIZZBUZZ CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function FizzBuzz(num) take the num parameter being *
 * passed and return all the numbers from 1 to num separated by *
 * spaces but replace every number that is divisible by 3       *
 * with the word "Fizz", replace every number that is divisible *
 * by 5 with the word "Buzz", & every number that is divisible  *
 * by both 3 and 5 with the word "FizzBuzz".                    *
 * For example: if num is 16, the code should return the string *
 * 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 *
 * The input will be within the range 1 - 50.                   *
 *                                                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: 3                                                   *
 * Output 1: "1 2 Fizz"                                         *
 *                                                              *
 * Input 2: 8                                                   *
 * Output 2: "1 2 Fizz 4 Buzz Fizz 7 8"                         *
 *                                                              *
 * Solution Efficiency                                          *
 * This user scored higher than 62.1% of users who solved this  * 
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/


export const FizzBuzz = (num) => {
    let str = ''

    for (let i = 1; i <= num; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            str = str + 'FizzBuzz'
        }
        else if (i % 5 == 0) {
            str = str + 'Buzz'
        }
        else if (i % 3 == 0) {
            str = str + 'Fizz'
        }      
        else
            str = str + i
        str = str + ' '
    }

    return str.slice(0, str.length - 1)
}