/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Swap Case                                                                           *
*  Using the JavaScript language, have the function SwapCase(str) take the str         *
*  parameter and swap the case of each character. For example: if str is "Hello World" *
*  the output should be hELLO wORLD. Let numbers and symbols stay the way they are.    *                                                  
*                                                                                      *
***************************************************************************************/

export const swapCase = (str) => {
    let newStr = str.toUpperCase()
    
    for (let i = 0; i < str.length; i++) {
        if (newStr[i] === str[i]) {
            newStr = newStr.slice(0, i) + str[i].toLowerCase() + newStr.slice(i + 1);
        }
    }
    
    return newStr
}