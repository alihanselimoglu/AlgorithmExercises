/************************************************************************
 *                 CODERBYTE WAVE SORTING CHALLENGE                     *
 *                                                                      *
 * Problem Statement                                                    *
 * Have the function WaveSorting(arr) take the array of positive integer*
 * stored in arr and return the string true if the numbers can be       *
 * arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise  *
 * return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], *
 * then a possible wave ordering of the numbers is: [2, 0, 4, 1, 4, 1]. *
 * So for this input your program should return the string true.        *
 * The input array will always contain at least 2 elements.             *
 * More examples are given below as sample test cases.                  *
 *                                                                      *
 * Examples                                                             *
 * Input 1: [0, 1, 2, 4, 1, 1, 1]                                       *
 * Output 1: false                                                      *
 *                                                                      *
 * Input 2: [0, 4, 22, 4, 14, 4, 2]                                     *
 * Output 2: true                                                       *
 *                                                                      *
 ***********************************************************************/


export function WaveSorting(arr) {
    const sortedArr = arr.sort((a, b) => a - b)
    const returnArr = []

    for (let i = 0; i < sortedArr.length; i += 2) {
      returnArr.push(sortedArr[i + 1])
      returnArr.push(sortedArr[i])
    }

    return returnArr
}