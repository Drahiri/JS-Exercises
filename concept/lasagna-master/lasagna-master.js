// https://exercism.org/tracks/javascript/exercises/lasagna-master
/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Determines cooking status based on how much time left on timer.
 *
 * @param {number} timeLeft
 *
 * @returns {string} current status of cooking.
 */
export function cookingStatus(timeLeft) {
  switch (timeLeft) {
    case undefined:
      return "You forgot to set the timer.";
    case 0:
      return "Lasagna is done.";
    default:
      return "Not done, please wait.";
  }
}

/**
 * Calculates how much time is needed to prepare all layers.
 *
 * @param {string[]} layers
 * @param {number} time avarage time per layer, defaults to 2 minutes.
 *
 * @returns {number} total preparation time
 */
export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

/** How much noodles you need per layer. */
const NOODLES_PER_LAYER = 50;
/** How much sauce you need per layer. */
const SAUCE_PER_LAYER = 0.2;

/**
 * Calculates how much noodles and sauce will be needed.
 *
 * @param {string[]} layers
 *
 * @returns {Quantities} required noodles and sauce quantities.
 */
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0.0;

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === "noodles") {
      noodles += NOODLES_PER_LAYER;
    }
    if (layers[i] === "sauce") {
      sauce += SAUCE_PER_LAYER;
    }
  }

  return { noodles, sauce };
}

/**
 * Adds secret ingredient from friend list to yours.
 *
 * @param {string[]} friendLayers
 * @param {string[]} myLayers
 */
export function addSecretIngredient(friendLayers, myLayers) {
  // To suppress error about 'undefined' can not be assign to 'string'
  // @ts-ignore
  myLayers.push(friendLayers.at(-1));
}

/**
 * Scales recipe to amount desired portion count while keeping original.
 *
 * @param {object} recipe original recipe for 2 portions
 * @param {number} numberOfPortions
 *
 * @returns {object} scaled recipe
 */
export function scaleRecipe(recipe, numberOfPortions) {
  let multiplier = numberOfPortions / 2;
  let scaledRecipe = structuredClone(recipe);
  for (let key in scaledRecipe) {
    scaledRecipe[key] = scaledRecipe[key] * multiplier;
  }

  return scaledRecipe;
}
