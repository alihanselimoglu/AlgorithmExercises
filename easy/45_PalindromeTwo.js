/****************************************************************
 *             CODERBYTE PALINDROME TWO CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PalindromeTwo(str) take the str parameter  * 
 * being passed and return the string true if the parameter is  *
 * a palindrome, (the string is the same forward as it is       *
 * backward) otherwise return the string false. The parameter   *
 * entered may have punctuation and symbols but they should not *
 * affect whether the string is in fact a palindrome.           *
 * For example: "Anne, I vote more cars race Rome-to-Vienna"    *
 * should return true.                                          *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Noel - sees Leon"                                  *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: "A war at Tarawa!"                                  *
 * Output 2: true                                               *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 33.1% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

export function PalindromeTwo(str) {
    const string = str.replace(/[^a-zA-Z]/g, "").toLowerCase()
    
    return (string.split('').reverse().join('') == string)
}