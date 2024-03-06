/****************************************************************
 *             CODERBYTE CONSONANT COUNT CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ConsonantCount(str) take the str string	*
 * parameter being passed and return the number of consonants 	*
 * the string contains.  					                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Hello World"                                       *
 * Output 1: 7		                                            *
 *                                                              *
 * Input 2: "Alphabets"                                         *
 * Output 2: 6                                                  *
 *                                                              *
 ***************************************************************/


export const ConsonantCount = (str) => {
    return str.replace(/[AEIUOaeiou ]/g, '').length
}