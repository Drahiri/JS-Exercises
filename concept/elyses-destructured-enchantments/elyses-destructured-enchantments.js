// https://exercism.org/tracks/javascript/exercises/elyses-destructured-enchantments
/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  let [card] = deck;
  return card;
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  let [, card] = deck;
  return card;
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  let [first, second, ...rest] = deck;
  return [second, first, ...rest];
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  let [card, ...rest] = deck;
  return [card, [...rest]];
}

/** @type {Card[]} **/
const FACE_CARDS = ["jack", "queen", "king"];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  let [card, ...rest] = deck;
  return [card, ...FACE_CARDS, ...rest];
}
