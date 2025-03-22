// https://exercism.org/tracks/javascript/exercises/resistor-color
// @ts-check

/**
 * Function that returns numerical value of resistor color.
 * 
 * @param {string} color
 * 
 * @returns {number}
 */

export const colorCode = (color) => {
    return COLORS.indexOf(color);
  };
  
  export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
];