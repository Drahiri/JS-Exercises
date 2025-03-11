// https://exercism.org/tracks/javascript/exercises/bird-watcher
// @ts-check

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 *
 * @returns {number} total bird count.
 */
export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} weekNumber
 *
 * @returns {number} birds counted in the given week.
 */
export function birdsInWeek(birdsPerDay, weekNumber) {
  let sum = 0;
  for (let i = (weekNumber - 1) * 7; i < weekNumber * 7; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}

/**
 * Fixes the counting mistake by increasing the bird count by one
 * for every second day.
 *
 * @param {number[]} birdsPerDay
 *
 * @returns {number[]} corrected bird count data.
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    ++birdsPerDay[i];
  }
  return birdsPerDay;
}
