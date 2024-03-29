/*Using the JavaScript language, have the function SimpleMode(arr) 
take the array of numbers stored in arr and return the number that 
appears most frequently (the mode). For example: if arr contains 
[10, 4, 5, 2, 4] the output should be 4. If there is more than one 
mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5]
should return 5 because it appeared first). If there is no mode return -1. 
The array will not be empty. */

export const SimpleMode = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    arr[i] in obj ? obj[arr[i]]++ : (obj[arr[i]] = 1);
  }
  const maxValue = Math.max(...Object.values(obj));
  const index = Object.values(obj).indexOf(maxValue)
  return Object.keys(obj)[index]
};
