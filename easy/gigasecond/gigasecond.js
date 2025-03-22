// https://exercism.org/tracks/javascript/exercises/gigasecond
// @ts-check

/**
 * Function that changes date to date 1 billion seconds later.
 * 
 * @param {Date} date
 * 
 * @returns {Date}
 */

export const gigasecond = (date) => {
    return new Date(Date.parse(date.toString()) + 1_000_000_000_000);
  };