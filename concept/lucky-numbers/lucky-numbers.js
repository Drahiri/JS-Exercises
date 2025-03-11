// https://exercism.org/tracks/javascript/exercises/lucky-numbers
// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} firstNumbers
 * @param {number[]} secondNumbers
 *
 * @returns {number} sum of the two arrays.
 */
export function twoSum(firstNumbers, secondNumbers) {
  return Number(firstNumbers.join("")) + Number(secondNumbers.join(""));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} num
 *
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(num) {
  const numString = String(num);
  for (let i = 0; i < numString.length / 2; i++) {
    if (numString.at(i) !== numString.at(-1 - i)) {
      return false;
    }
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string | null | undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return "Required field";
  }

  let num = Number(input);
  if (isNaN(num) || num === 0) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
