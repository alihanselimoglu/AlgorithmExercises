/*Have the function StringReduction(str) take the str parameter 
being passed and return the smallest number you can get through 
the following reduction method.

The method is: Only the letters a, b, and c will be given in str 
and you must take two different adjacent characters and replace it
with the third. For example "ac" can be replaced with "b" but "aa" 
cannot be replaced with anything. This method is done repeatedly until 
the string cannot be further reduced, and the length of the resulting 
string is to be outputted.

For example: if str is "cab", "ca" can be reduced to "b" and you get 
"bb" (you can also reduce it to "cc"). The reduction is done so the 
output should be 2. If str is "bcab", "bc" reduces to "a", so you 
have "aab", then "ab" reduces to "c", and the final string "ac" is 
reduced to "b" so the output should be 1. */

export function StringReduction(str) {
  const pairs = {
    ab: 'c',
    ac: 'b',
    ba: 'c',
    bc: 'a',
    ca: 'b',
    cb: 'a',
  };

  let newStr = str;
  for (const key in pairs) {
    const i = newStr.indexOf(key);
    if (i > -1) {
      newStr = newStr.slice(0, i) + pairs[key] + newStr.slice(i + 2, -1);
    }
  }

  return newStr.length;
}
