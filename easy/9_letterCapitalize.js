export const letterCapitalize = (str) => {
    
    // charAt(5) => it gives that index of string
    // slice(1,str.length) => it seperate string from 1 to end

    
    let newStr = []
    str.split(' ').forEach(word => {
        newStr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length))
    });


    return newStr.join(" ")
    
}

/*

Letter Capitalize
Using the JavaScript language, have the function LetterCapitalize(str)
 take the being passed and capitalize the first letter of each word.
Words will be separated by only one space.
*/