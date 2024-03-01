/****************************************************************
 *              CODERBYTE SIMPLE EVENS CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SimpleEvens(num) check whether every single*
 * number in the passed in parameter is even. If so, return the *
 * string true, otherwise return the string false. For example: *
 * if num is 4602225 your program should return the string      *
 * false because 5 is not an even number.                       *
 *                                                              *
 * Examples                                                     *
 * Input 1: 2222220222 		                                *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: 20864646452                                         *
 * Output 2: false                                              *
 *                                                              *
 ***************************************************************/

export const SimpleEvens = (num) => {
  let isEven = true;
  for (let i = 0; i < num.length; i++) {
    if (Number(num[i]) % 2 == 1) {
      isEven = false;
      break;
    }
  }
  return isEven;
};
