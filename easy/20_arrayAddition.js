/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Array Addition I                                                                    *
*  Using the JavaScript language, have the function ArrayAdditionI(arr) take the array *
*  of numbers stored in arr and return the string true if any combination of numbers   *
*  in the array can be added up to equal the largest number in the array, otherwise    *
*  return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the      *
*  output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, *
*  will not contain all the same elements, and may contain negative numbers.           *                                         *
*                                                                                      *
*  SOLUTION                                                                            *
*  To get the largest number I am going to sort the array in ascending order which     *
*  leaves the largest number at the end of the array. I can get largest number using   *
*  pop() function. To get the total I am going to use two nested loops. The outer      *
*  loop goes through every number in the array. The inner loop then adds all the other *
*  numbers in the array and then compares the total to the largest number. If a match  *
*  is found then return true else return false.                                        *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Sort array in ascending order.                                                 *
*    2) Remove largest number from array and store in largest                          *
*    3) Loop through each number in array                                              *
*    4) Add every other number to this number and see if total matches largest         *
*    5) If match return True else return False
*                                                                                      *
***************************************************************************************/




export const arrayAddition = (arr) => {
    const newArr = [...arr]
    
    
    // let biggest = 0
    // arr.forEach(element => {
    //     if (element > biggest) biggest = element
    // });
    const maxValue = Math.max(...arr)
    let sum = 0

    newArr.splice(arr.indexOf(maxValue), 1)

    for(let i = 0; i < newArr.length; i++)
        sum += newArr[i]

    return maxValue === sum ? true : false

}