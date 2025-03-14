// https://exercism.org/tracks/javascript/exercises/annalyns-infiltration
// @ts-check

/**
 * The fast attack is available when the knight is sleeping.
 *
 * @param {boolean} knightIsAwake
 *
 * @returns {boolean} Whether or not you can execute a fast attack.
 */
export function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake) {
    return false;
  } else {
    return true;
  }
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} whether or not you can spy on someone.
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * You'll get caught by ther archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} whether or not you can send a signal to the prisoner.
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} whether or not you can free Annalyn's friend.
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (
    (!archerIsAwake && petDogIsPresent) ||
    (prisonerIsAwake && !knightIsAwake && !archerIsAwake)
  );
}
