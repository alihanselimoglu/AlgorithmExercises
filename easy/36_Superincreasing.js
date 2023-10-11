/****************************************************************
 *             CODERBYTE SUPERINCREASING CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function Superincreasing(arr) take the array of     *
 * numbers stored in arr and determine if the array forms a     *
 * superincreasing sequence where each element in the array is  *
 * greater than the sum of all previous elements. The array will*
 * only consist of positive integers.                           *
 * For example: if arr is [1, 3, 6, 13, 54] then your program   *
 * should return the string "true" because it forms a           *
 * superincreasing sequence. If a superincreasing sequence      *
 * isn't formed, then your program should return the string     *
 * "false"                                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1,2,3,4]                                           *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [1,2,5,10]                                          *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/

export const Superincreasing = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < sumofArr(arr, i)) return false;
  }
  return true;
};

function sumofArr(arr, i) {
  let sum = 0;
  for (; i > 0; i--) {
    sum += arr[i - 1];
  }
  return sum;
}
