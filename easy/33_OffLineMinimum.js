/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  OffLine Minimum                                                                     *
*  Using the JavaScript language, have the function OffLineMinimum(strArr) take the    *
*  strArr parameter being passed which will be an array of integers ranging from       *
*  1...n and the letter "E" and return the correct subset based on the following       *
*  rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] *
*  where the I's stand for integers and the E means take out the smallest integer      *
*  currently in the whole set. When finished, your program should return that new set  *
*  with integers separated by commas. For example: if strArr is                        *
*  ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.    *
*                                                                                      *
*  SOLUTION                                                                            *
*  This challenge requires you to repeatedly find the lowerst value in a subset of an  *
*  array every time the letter E is found. So to handle this repettiion I am creating  *
*  a function that will sort an array in ascending order and return the lowest value.  *
*  I will loop through each entry in the array and when I encounter an E then I will   *
*  pass a subset of my array starting from position 0 to the location of the E.  I     *
*  will send this subset to my function to get the lowest value. I will collect all    *
*  of the lowest values in an array. When finished I will convert array to string.     *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Initialize var subset and min                                                  *
*    2) Create function that sorts an array in asc order and returns lowest value      *
*    3) Store lowest value in an array                                                 *
*    4) Convert array into a string and return as answer                               *
*                                                                                      *
***************************************************************************************/

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
