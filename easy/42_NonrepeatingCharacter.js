/****************************************************************
 *          CODERBYTE NON REPEATING CHARACTERS CHALLENGE        *
 *                                                              *
 * Problem Statement                                            *
 * Have the function NonrepeatingCharacter(str) take the str    *
 * parameter being passed, which will contain only alphabetic   *
 * characters and spaces, and return the first non-repeating    *
 * character. For example: if str is "agettkgaeee" then your    *
 * program should return k. The string will always contain at   *
 * least one character and there will always be at least one    *
 * non-repeating character.                                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: "abcdef"                                            *
 * Output 1: a                                                  *
 *                                                              *
 * Input 2: "hello world hi hey"                                *
 * Output 2: w                                                  *
 *                                                              *
 ***************************************************************/

export function NonrepeatingCharacter(str) {
  const charMap = {};

  for (let char of str) {
    if (charMap[char]) charMap[char]++;
    else charMap[char] = 1;
  }

  for(let char of str) {
    if (charMap[char] == 1) return char
  }

}
