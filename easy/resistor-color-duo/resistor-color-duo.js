// https://exercism.org/tracks/javascript/exercises/resistor-color-duo
// @ts-check

// Imported so to practice importing modules and not copy-pasting code
import { colorCode } from "../resistor-color/resistor-color"

/**
 * Function that returns numerical value of 2 resistor colors.
 * 
 * @param {string[]} colors
 * 
 * @returns {number}
 */
export const decodedValue = (colors) => {
    return colorCode(colors[0]) * 10 + colorCode(colors[1]);
};