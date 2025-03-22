// https://exercism.org/tracks/javascript/exercises/two-fer
// @ts-check

/**
 * Creates sentence 'two fer' depending on name.
 * 
 * @param {string} name
 * 
 * @returns {string}
 */

export const twoFer = (name) => {
    return `One for ${name ? name : "you"}, one for me.`;
  };