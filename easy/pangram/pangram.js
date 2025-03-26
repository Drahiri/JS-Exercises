// https://exercism.org/tracks/javascript/exercises/pangram
// @ts-check

/**
 * Function that checks if sentence is pangram.
 * @param {string} sentence
 * 
 * @return {boolean}
 */
export const isPangram = (sentence) => {
    return new Set(sentence.toLowerCase().match(/[a-z]/g)).size === 26;
  };
