export const longestWord = (sen) => {
    // remove dot etc
    // split from spaces and create an array

    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ")

    // order words
    arr.sort((a,b) => {return b.length - a.length})

    // return 0 index
    return arr[0]

}





/* 
Longest Word
Have the function LongestWord(sen) take the sen parameter 
being passed and return the longest word in the string. 
If there are two or more words that are the same length, 
return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 
Words may also contain numbers, for example "Hello world123 567"
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
*/