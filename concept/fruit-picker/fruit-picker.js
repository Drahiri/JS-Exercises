// https://exercism.org/tracks/javascript/exercises/fruit-picker
/// <reference path="./global.d.ts" />
// @ts-check

import { notify } from "./notifier";
import { order } from "./grocer";

/**
 * @returns {void}
 */
export function onSuccess() {
  notify({ message: "SUCCESS" });
}

/**
 * @returns {void}
 */
export function onError() {
  notify({ message: "ERROR" });
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 *
 * @returns {void}
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  order(query, onSuccessCallback, onErrorCallback);
}

/**
 * @param {string} variety
 * @param {number} quantity
 *
 * @returns {void}
 */
export function postOrder(variety, quantity) {
  let query = { variety, quantity };
  orderFromGrocer(query, onSuccess, onError);
}
