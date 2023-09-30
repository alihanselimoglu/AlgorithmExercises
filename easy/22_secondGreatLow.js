/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Second Great Low                                                                    *
 *  Using the JavaScript language, have the function SecondGreatLow(arr) take the array *
 *  of numbers stored in arr and return the second lowest and second greatest numbers,  *
 *  respectively, separated by a space. For example: if arr contains                    *
 *  [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and     *
 *  will contain at least 2 numbers. It can get tricky if there's just two numbers!     *                                              *
 *                                                                                      *
 ***************************************************************************************/

export const SecondGreatLow = (arr) => {
  let newArr = [];
  arr.forEach((num) => {
    !newArr.includes(num) && newArr.push(num);
  });

  // sorting
  newArr.sort((a, b) => a - b);

  if (newArr.length === 2) {
    return newArr[1] + '-' + newArr[0];
  } else {
    return newArr[1] + '-' + newArr[newArr.length - 2];
  }
};
