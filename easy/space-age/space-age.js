// https://exercism.org/tracks/javascript/exercises/space-age
// @ts-check

const PLANET_PERIOD_RATIO = {
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "earth": 1.0,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132,
};

const EARTH_YEAR_IN_SECONDS = 31_557_600;

/**
 * Calculates age in given planet time.
 * 
 * @param {string} planet
 * @param {number} ageInSeconds
 * 
 * @returns {number}
 */
export const age = (planet, ageInSeconds) => {
    return Number((ageInSeconds / EARTH_YEAR_IN_SECONDS / PLANET_PERIOD_RATIO[planet]).toFixed(2));
}