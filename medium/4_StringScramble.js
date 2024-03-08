/*Using the JavaScript language, have the function StringScramble(str1,str2)
take both parameters being passed and return the string true if a portion of str1 
characters can be rearranged to match str2, otherwise return the string false. 
For example: if str1 is "rkqodlw" and str2 is "world" the output should 
return true. Punctuation and symbols will not be entered with the parameters. */

export const StringScramble = (str1, str2) => {
  let uniqStr1 = [...new Set(str1)];
  let uniqStr2 = [...new Set(str2)];

  for (let i = 0; i < uniqStr2.length; i++) {
    if (!uniqStr1.includes(uniqStr2[i])) {
      return false;
    }
  }

  return true;
};
