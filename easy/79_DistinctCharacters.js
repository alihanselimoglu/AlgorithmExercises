/****************************************************************
 *             CODERBYTE DISTINCT CHARACTERS CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function DistinctCharacters(str) take the str       *
 * parameter being passed and determine if it contains at least *
 * 10 distinct characters, if so, then your program should      *
 * return the string true, otherwise it should return the string*
 * false. For example: if str is "abc123kkmmmm?" then your      *
 * program should return the string false because this string   *
 * contains only                                                *
 * 9 distinct characters: a, b, c, 1, 2, 3, k, m, ? adds up to 9*
 *                                                              *
 * Examples                                                     *
 * Input 1: 12334bbmma:=6                                       *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: eeeemmmmmmmmm1000                                   *
 * Output 2: false                                              *
 ***************************************************************/

export const DistinctCharacters = (str) => {
  let arr = [];
  str.split('').forEach((element) => {
    if (!arr.includes(element)) arr.push(element);
  });
  return arr.length > 9 ? true : false;
};
