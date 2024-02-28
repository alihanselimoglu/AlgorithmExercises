/****************************************************************
 *             CODERBYTE CAMEL CASE CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CamelCase(str) take the str parameter being*
 * passed and return it in proper camel case format where the   *
 * first letter of each word is capitalized (excluding the first*
 * letter). The string will only contain letters and some       *
 * combination of delimiter punctuation characters separating   *
 * each word.                                                   *
 *                                                              *
 * For example: if str is "BOB loves-coding" then your program  *
 *  should return the string bobLovesCoding.                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: "cats AND*Dogs-are Awesome"                         *
 * Output 1: catsAndDogsAreAwesome                              *
 *                                                              *
 * Input 2: "a b c d-e-f%g"                                     *
 * Output 2: aBCDEFG                                            *
 ***************************************************************/


export function CamelCase(str) {
    let newStr = str.replace(/[^a-zA-Z]/g, '1').toLowerCase().split('')

    for (let i = 1; i < newStr.length; i++) {
        if (newStr[i] == '1') { 
            newStr[i + 1] = newStr[i + 1].toUpperCase()
            newStr.splice(i, 1)
        }
    }

    return newStr.join('')
}