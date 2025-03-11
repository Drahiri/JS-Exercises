// https://exercism.org/tracks/javascript/exercises/freelancer-rates
// @ts-check

/**
 * The day rate given the hourly rate.
 *
 * @param {number} hourlyRate
 *
 * @returns {number} the rate by day.
 */
export function dayRate(hourlyRate) {
  return hourlyRate * 8;
}

/**
 * Calculates the number of days in a budget, rounded down.
 *
 * @param {number} budget the total budget.
 * @param {number} hourlyRate the rate by hour.
 *
 * @returns {number} the number of days.
 */
export function daysInBudget(budget, hourlyRate) {
  return Math.floor(budget / dayRate(hourlyRate));
}

/**
 * Calculate the discounted rate for large projects, rounded up.
 *
 * @param {number} hourlyRate
 * @param {number} numberOfDays number of days the project spans.
 * @param {number} discountRate for example 20% written as 0.2.
 *
 * @returns {number} the rounded up discounted rate.
 */
export function priceWithMonthlyDiscount(
  hourlyRate,
  numberOfDays,
  discountRate
) {
  let fullMonths = Math.floor(numberOfDays / 22);
  let remainingDays = numberOfDays % 22;
  let fullMonthPrice = fullMonths * 22 * dayRate(hourlyRate);

  return Math.ceil(
    fullMonthPrice -
      fullMonthPrice * discountRate +
      remainingDays * dayRate(hourlyRate)
  );
}
