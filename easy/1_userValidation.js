export const userValidation = (str) => {
  if (
    str.length >= 4 && str.length <= 25 &&
    (/[a-zA-Z]/).test(str.slice(0,1)) &&// str.charAt(0)
    (/^\w+$/).test(str) &&
    (/[a-zA-Z0-9]/).test(str.slice(-1))
    ) {
      return true
    } else {
      return false

  }

  // AND Operator
  // .length property

  // Reg Exp
  // .charAt() .slice()
  // .test()


};

/*
Codeland Username Validation
Have the function CodelandUsernameValidation(str) 
take the str parameter being passed and determine 
if the string is a valid username according to the 
following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the 
underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should 
return the string true, otherwise return the string false.
Examples
Input: "aa_"
Output: false
Input: "u__hello_world123"
Output: true 
*/
