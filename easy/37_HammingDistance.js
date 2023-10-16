/****************************************************************
 *             CODERBYTE HAMMING DISTANCE CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function HammingDistance(strArr) take the array of  *
 * strings stored in strArr, which will only contain two strings*
 * of equal length and return the Hamming distance between them.*
 * The Hamming distance is the number of positions where the    *
 * corresponding characters are different.                      *
 * For example: if strArr is ["coder", "codec"] then your       *
 * program should return 1. The string will always be of equal  *
 * length and will only contain lowercase characters from the   *
 * alphabet and numbers.                                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["10011", "10100"]                                  *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: ["helloworld", "worldhello"]                        *
 * Output 2: 8                                                  *
 *                                                              *
 ***************************************************************/

export function HammingDistance(strArr) {
    let sum = 0
    for (let i = 0; i < strArr[0].length; i++) {
        if (strArr[0][i] !== strArr[1][i]) sum ++
    }
    return sum
}