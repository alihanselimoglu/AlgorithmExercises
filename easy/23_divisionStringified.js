/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Division Stringified                                                                *
*  Using the JavaScript language, have the function DivisionStringified(num1,num2)     *
*  take both parameters being passed, divide num1 by num2, and return the result as    *
*  a string with properly formatted commas. If an answer is only 3 digits long,        *
*  return the number with no commas (ie. 2 / 3 should output "1"). For example:        *
*  if num1 is 123456789 and num2 is 10000 the output should be "12,345".               *
*                                                                                      *
*  SOLUTION                                                                            *
*  The first step is to divide the two number and get a whole number that you can      *
*  format according to the directions. I use RegExp to format the number.              *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Divide num1 by num2 and round to whole number                                  *
*    2) Use RegExp to format string as required                                        *
*                                                                                      *
***************************************************************************************/





export const devisionStringified = (num1, num2) => {

    // one line solution
    // return Math.floor(n1/n2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");


    const division = Math.floor(n1/n2).toString()
    
    if(division.length < 4) return division 
    
    const divisionArr = division.split('').reverse()

    let arr = []
    let j = 0

    for (let i = 0; i < divisionArr.length; i++) {
        if(j != 0 && j % 3 === 0) {
            arr.push(divisionArr[i] + ",")
        }else{
            arr.push(divisionArr[i])
        }
        j++
        
    }

    return arr.reverse().join("")
}