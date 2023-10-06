/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Number Addition                                                                     *
*  Using the JavaScript language, have the function NumberSearch(str) take the str     *
*  parameter, search for all the numbers in the string, add them together, then        *
*  return that final number. For example: if str is "88Hello 3World!" the output       *
*  should be 91. You will have to differentiate between single digit numbers and       *
*  multiple digit numbers like in the example above. So "55Hello" and "5Hello 5"       *
*  should return two different answers. Each string will contain at least one letter   *
*  or symbol.                                                                          *
*                                                                                      *
***************************************************************************************/

export const numberAddition = (str) => {
    const strArr = str.split('')

    let numberArr = []

    for(let i = 0; i < strArr.length; i++) {

        let lastI = numberArr.length - 1

        if((/[^0-9]/).test(strArr[i])) {
            numberArr.push(strArr[i])
        } else{
            if(numberArr.length === 0){
                numberArr.push(strArr[i])
            }else if ((/[0-9]/).test(numberArr[lastI])){
                numberArr[lastI] = numberArr[numberArr.length - 1] + strArr[i]
            }else if ((/[^0-9]/).test(numberArr[lastI])){
                numberArr.push(strArr[i])
            }
        }

    }

    return calculateSum(numberArr)
}

const calculateSum = (arr) => {
    let sum = 0

    for (let j = 0; j < arr.length; j++) {
        if(arr[j].match(/\+d/)) sum += parseInt(arr[j])
    }

    return sum
}