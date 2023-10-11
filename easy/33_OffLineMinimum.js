/****************************************************************
 *             CODERBYTE BITWISE TWO CHALLENGE                  *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BitwiseTwo(strArr) take the array of       *
 * strings stored in strArr, which will only contain two        *
 * strings of equal length that represent binary numbers, and   *
 * return a final binary string that performed the              *
 * bitwise AND operation on both strings. A bitwise AND         *
 * operation places a 1 in the new string where there is a 1 in *
 * both locations in the binary strings, otherwise it places    *
 * a 0 in that spot.                                            *
 * For example: if strArr is ["10111", "01101"] then your       *
 * program should return the string "00101"                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["100", "000"]                                      *
 * Output 1: 000                                                *
 *                                                              *
 * Input 2: ["10100", "11100"]                                  *
 * Output 2: 10100                                              *
 *                                                              *
 ***************************************************************/

export const OffLineMinimum = (strArr) => {
    const returnArr = [] 
    let arr = []

    for (let i = 0; i < strArr.length; i++) {

        if (!(strArr[i] === "E")) {
            arr.push(parseInt(strArr[i]))
        }

        else {
            arr.sort((a, b) => {
                return a - b
            })
            returnArr.push(arr[0])
            arr.splice(0, 1);
        }

        
    }

    return returnArr
}
