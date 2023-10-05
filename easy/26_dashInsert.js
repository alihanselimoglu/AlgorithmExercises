/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Dash Insert                                                                         *
*  Using the JavaScript language, have the function DashInsert(str) insert dashes      *
*  ('-') between each two odd numbers in str. For example: if str is 454793 the        *
*  output should be 4547-9-3. Don't count zero as an odd number.                       *
*                                                                                      *
***************************************************************************************/

export const dashInsert = (str) => {
    let newStr = ''
    for (let i = 0; i < str.length; i += 1) {
        newStr += str[i]
        if (str[i] % 2 === 1 && str[i + 1] % 2 === 1) newStr += '-'
    }
    return newStr
}