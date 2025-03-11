// https://exercism.org/tracks/javascript/exercises/mixed-juices
// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} juiceName
 *
 * @returns {number} time in minutes.
 */

export function timeToMixJuice(juiceName) {
  switch (juiceName) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut to reach
 * a certain supply.
 *
 * @param {number} neededLimeWedges
 * @param {string[]} supply
 *
 * @returns {number} number of limes cut.
 */

export function limesToCut(neededLimeWedges, supply) {
  let limesToCut = 0;
  let i = 0;
  while (neededLimeWedges > 0 && i < supply.length) {
    switch (supply[i]) {
      case "small":
        neededLimeWedges -= 6;
        break;
      case "medium":
        neededLimeWedges -= 8;
        break;
      case "large":
        neededLimeWedges -= 10;
        break;
      default:
        break;
    }
    ++limesToCut;
    ++i;
  }

  return limesToCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} minutesLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up.
 */
export function remainingOrders(minutesLeft, orders) {
  while (minutesLeft > 0) {
    minutesLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}
