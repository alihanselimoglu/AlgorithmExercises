/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Letter Count I                                                                      *
*  Have the function LetterCountI(str) take the str parameter being passed and return  *
*  the first word with the greatest number of repeated letters. For example:           *
*  "Today, is the greatest day ever!" should return greatest because it has 2 e's      *
*  (and 2 t's) and it comes before ever which also has 2 e's. If there are no words    *
*  with repeating letters return <b>-1</b>. Words will be separated by spaces.         *
***************************************************************************************/


export const letterCount = (str) => {
    const arr = str.replace(/[^a-zA-Z ]/g,"").toLowerCase().split(' ')

    let words = []

    for (let i = 0; i < arr.length; i++) {
        let obj = {}

        arr[i].split('').forEach(char => {
            char in obj ? obj[char] += 1 : obj[char] = 1
        });
        words.push(obj)
    }

    let maxFreq = []

    words.forEach(element => {
        maxFreq.push(Math.max(...Object.values(element)))
    });

    let maxValue = Math.max(...maxFreq)

    return maxValue < 2 ? -1 : (arr[maxFreq.indexOf(maxValue)])
}