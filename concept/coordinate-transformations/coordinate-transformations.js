// https://exercism.org/tracks/javascript/exercises/coordinate-transformation
// @ts-check

/**
 * Translates 2d coordinates.
 *
 * @param {number} alongX
 * @param {number} alongY
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */

export function translate2d(alongX, alongY) {
  return function (x, y) {
    return [x + alongX, y + alongY];
  };
}

/**
 * Scales 2d coordinates.
 *
 * @param {number} alongX
 * @param {number} alongY
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(alongX, alongY) {
  return function (x, y) {
    return [x * alongX, y * alongY];
  };
}

/**
 * @param {function} firstTransform
 * @param {function} secondTransform
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(firstTransform, secondTransform) {
  return function (x, y) {
    let afterFirstTransform = firstTransform(x, y);
    return secondTransform(afterFirstTransform[0], afterFirstTransform[1]);
  };
}

/**
 * Memoraize last computed call.
 *
 * @param {function} transform
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(transform) {
  let lastX;
  let lastY;
  let computed;

  return function (x, y) {
    if (x !== lastX || y !== lastY) {
      lastX = x;
      lastY = y;
      computed = transform(x, y);
    }
    return computed;
  };
}
