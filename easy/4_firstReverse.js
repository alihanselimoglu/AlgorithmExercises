export const firstReverse = (str) => {
  // .split()
  // .reverse()
  // .join()

  const arr = str.split('');
  const reversedArr = arr.reverse();
  const newStr = reversedArr.join('');

  return newStr;

//   return str.split("").reverse().join("")
};

/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  First Reverse                                                                       *
*  Have the function FirstReverse() take the str parameter being passed and return     *
*  the string in reversed order.                                                       *
*                                                                                      *
*  SOLUTION                                                                            *
*  There is no reverse function for Strings in JavaScript BUT there is a reverse()     *
*  function for arrays.  I will use this built-in function for my solution.            *
*    1) Convert the string to an array using the split() function.                     *
*    2) Use Array Reverse() function.                                                  *
*    3) Convert array back to a string using join() function.                          *
*                                                                                      *
***************************************************************************************/
