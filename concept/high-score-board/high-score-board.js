// https://exercism.org/tracks/javascript/exercises/high-score-board
/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with the initial entry.
 *
 * @returns {Record<string, number>} new score board.
 */
export function createScoreBoard() {
  return { "The Best Ever": 1_000_000 };
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} playerName
 * @param {number} score
 *
 * @returns {Record<string, number>} updated score board.
 */
export function addPlayer(scoreBoard, playerName, score) {
  scoreBoard[playerName] = score;
  return scoreBoard;
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} playerName
 * @returns {Record<string, number>} updatede score board.
 */
export function removePlayer(scoreBoard, playerName) {
  delete scoreBoard[playerName];
  return scoreBoard;
}

/**
 * Increases a player's score by a given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} playerName
 * @param {number} score
 *
 * @returns {Record<string, number>} updated score board.
 */
export function updateScore(scoreBoard, playerName, score) {
  scoreBoard[playerName] += score;
  return scoreBoard;
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 *
 * @returns {Record<string, number>} updated score board.
 */
export function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
    scoreBoard[key] += 100;
  }
  return scoreBoard;
}

/**
 * Normalize a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performaing the normalization.
 *
 * @returns {number} normalized score.
 */
export function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}
