// Have the function DashInsert(str) insert dashes ('-') 
// between each two odd numbers in str.

// For example: if str is 454793 the output should be 
// 4547-9-3. Don't count zero as an odd number.

// Examples

// Input: 99946
// Output: 9-9-946

// Input: 56730
// Output: 567-30

export const DashInsert = (str) => {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        newStr = newStr + str[i]
        if (str[i] % 2 != 0 && str[i + 1] % 2 != 0) newStr = newStr + '-'
    }
    return newStr
}