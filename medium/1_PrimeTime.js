// Have the function PrimeTime(num) take the num
// parameter being passed and return the string
// true if the parameter is a prime number,
// otherwise return the string false.
// The range will be between 1 and 2^16.

export const PrimeTime = (num) => {
  if (num <= 1) return false;
  if (num == 2) return true;
  for (let i = 2; i <= parseInt(num / 2); i += 2) {
    if (num % i == 0) return false;
  }
  return true;
};
