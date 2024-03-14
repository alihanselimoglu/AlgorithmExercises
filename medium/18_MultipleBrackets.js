/*Using the JavaScript language, have the 
function MultipleBrackets(str) 
take the str parameter being passed and return 1 
#ofBrackets if the brackets 
are correctly matched and each one is accounted for. 
Otherwise return 0. 
For example: if str is "(hello [world])(!)", then the 
output should be 1 3 because
all the brackets are matched and there are 3 pairs of 
brackets, but if str is "((hello [world])" 
the the output should be 0 because the brackets do not 
correctly match up. 
Only "(", ")", "[", and "]" will be used as brackets. 
If str contains no brackets return 1. */


export function MultipleBrackets(str) {
    let newStr = str.replace(/[^\(\)\[\]]/g, '')
    let curvy = 0
    let cornered = 0
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            curvy++
            count++
        }
        else if (str[i] == '[') {
            cornered++
            count++
        }
        else if (str[i] === ')') {
            curvy--
        }
        else if (str[i] == ']') {
            cornered--
        }

        
    }

    return curvy === 0 && cornered === 0 ? '1 ' + count : '0'
}
