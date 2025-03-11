// https://exercism.org/tracks/javascript/exercises/lasagna
// @ts-check

/**
 * The number of minutes it takes to prepare one layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * The number of minutes lasagna should spend in oven.
 */
export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determines the number of minutes the lasagna need to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 *
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
 * Determines the number of minutes needed to prepare a given
 * number of layers.
 *
 * @param {number} numberOfLayers
 *
 * @returns {number} the number of minutes to prepare all layers
 */
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

/**
 * Number of minutes of working time. That is, the time to prepare all the layers
 * and time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 *
 * @returns {number} total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
