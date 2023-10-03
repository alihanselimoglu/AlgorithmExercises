
/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  MeanMode                                                                            *
*  Have the function MeanMode(arr) take the array of numbers stored in arr and         *
*  return 1 if the mode equals the mean, 0 if they don't equal each other              *
*  (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).     *
*  The array will not be empty, will only contain positive integers, and will not      *
* contain more than one mode.                                                          *
*                                                                                      *
*  SOLUTION                                                                            *
*  Since it is possible that I will want a function that will calculate the mean or    *
*  mode in the future, I decided to create separate functions for each. The mean is    *
*  calculated by the average of all values in the array. The mode is the number that   *
*  exists the most in the array. My solution is to call my two functions and then      *
*  compare to see if they are equal and if so return 1 else return 0.                  *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Create separate functions for getMean and getMode                              *
*    2) Compare the values returned from the two functions                             *
*    3) If values are equal return 1 else return 0                                     *
*                                                                                      *
***************************************************************************************/







export const MeanMode = (arr) => {
    
    const arrCount = []
    let total = 0
    
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] == arr[j]) count ++
        }
        arrCount.push(count)
        total += arr[i]
    }

    return arr[arrCount.indexOf(Math.max(...arrCount))] === total/arr.length ? 1 : 0
}