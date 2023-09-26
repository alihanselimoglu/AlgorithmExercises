/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  AB Check                                                                            *
 *  Using the JavaScript language, have the function ABCheck(str) take the str          *
 *  parameter being passed and return the string true if the characters a and b are     *
 *  separated by exactly 3 places anywhere in the string at least once                  *
 *  (ie. "lane borrowed" would result in true because there is exactly three characters *
 *  between a and b). Otherwise return the string false.                                *
 *                                                                                      *
 *  SOLUTION                                                                            *
 *  I am goint to use a RegExp to see if the patter [a...b] exists anywhere in the      *
 *  string. If it does then return true else return false.                              *
 *                                                                                      *
 *  Steps for solution                                                                  *
 *    1) Use RegExp pattern to search string for pattern a...b                          *
 *    2) If found return true                                                           *
 *    3) Else return false                                                              *
 *                                                                                      *
 ***************************************************************************************/

export const abCheck = (str) => {
  // const arr = str.toLowerCase().split('');
  // let control = []
  // arr.forEach((char) => {
  //   if (char === 'a' && arr[arr.indexOf(char) + 4] === 'b') control.push(true);
  // });

  // return control.includes(true) ? true : false;

  // search()

  return str.search("a...b") > -1 ? true : false

};
