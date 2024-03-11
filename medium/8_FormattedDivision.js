/*Using the JavaScript language, have the function FormattedDivision(num1,num2)
take both parameters being passed, divide num1 by num2, and return the result as a 
string with properly formatted commas and 4 significant digits after the decimal place. 
For example: if num1 is 123456789 and num2
is 10000 the output should be "12,345.6789". The output must contain a number in the 
one's place even if it is a zero. */


export function FormattedDivision(num1,num2) {
    let newNum = String(num1 / num2).split('.')[0].split('').reverse().join('')
    let afterDot = String(num1 / num2).split('.')[1]
    let newStr = ''

    for (let i = newNum.length - 1; i >= 0; i--) {
        if (i % 3 === 0 && i != 0) newStr = newStr + newNum[i] + ','
        else newStr = newStr + newNum[i]
        
    }
    return newStr + '.' + afterDot
}