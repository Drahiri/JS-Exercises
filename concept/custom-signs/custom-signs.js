// https://exercism.org/tracks/javascript/exercises/custom-signs
// @ts-check

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters.
 */
export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

/**
 * Builds a birthday sign. that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age.
 */
export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${
    age < 50 ? "young" : "mature"
  } fellow you are.`;
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string.
 */
export function graduationFor(name, year) {
  return `Congratulations ${name}!
Class of ${year}`;
}

const BASE_SIGN_COST = 20;
const COST_BY_LETTER = 2;

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that include currency parameter.
 *
 * @param {string} sign
 * @param {number} currency
 * @returns {string} cost to create a sign.
 */
export function costOf(sign, currency) {
  return `Your sign costs ${
    sign.length * COST_BY_LETTER + BASE_SIGN_COST
  }.00 ${currency}.`;
}
