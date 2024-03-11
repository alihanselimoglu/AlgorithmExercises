/*Using the JavaScript language, have the function TripleDouble(num1,num2)
take both parameters being passed, and return 1 if there is a straight triple
of a number at any place in num1 and also a straight double of the same number in num2. 
For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because
in the first parameter you have the straight triple 999 and you have a straight double,
99, of the same number in the second parameter. If this isn't the case, return 0.*/

export const TripleDouble = (num1, num2) => {
  let triple = [];
  let num1Str = String(num1);
  let num2Str = String(num2);

  for (let i = 1; i < num1Str.length - 1; i++) {
    if (num1Str[i - 1] === num1Str[i] && num1Str[i + 1] === num1Str[i])
      triple.push(num1Str[i]);
  }
  for (let i = 0; i < num2Str.length - 1; i++) {
    if (num2Str[i] === num2Str[i + 1] && num2Str[i] in triple) return 1;
  }

  return 0;
};
