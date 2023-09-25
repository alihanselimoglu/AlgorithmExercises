export const timeConvert = (num) => {
    let min = num % 60
    let hour = parseInt((num / 60))
    // let hour = Math.floor(num / 60) // rounding to floor

    return hour + ":" + min

    // return `${Math.floor(num / 60)}:${num % 60}` // one line solution
}
















/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Time Convert                                                                        *
*  Using the JavaScript language, have the function TimeConvert(num) take the num      *
*  parameter being passed and return the number of hours and minutes the parameter     *
*  converts to (ie. if num = 63 then the output should be 1:3). Separate the number    *
*  of hours and minutes with a colon.                                                  *
*                                                                                      *
+
***************************************************************************************/