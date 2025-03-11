// https://exercism.org/tracks/javascript/exercises/elyses-enchantments
// @ts-check

/**
 * Retrieve card from cards array at the 0-based position.
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card.
 */
export function getItem(cards, position) {
  return cards[position];
}

/**
 * Exchange card with replacement at the 0-based position.
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied.
 */
export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

/**
 * Insert new card ath the end of the cards array.
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with inserted card.
 */
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

/**
 * Remove the card at hte 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} cards with the removed.
 */
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

/**
 * Remove the card from the end of the cards array.
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card.
 */
export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

/**
 * Insert new card at the beginning of the cards array.
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including new card.
 */
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

/**
 * Remove card from the beginning of the cards.
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card.
 */
export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

/**
 * Compare the number of cards with the given size.
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards,
 * false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}
