// https://exercism.org/tracks/javascript/exercises/windowing-system
// @ts-check

/**
 * Constructor function for 'screen' size.
 *
 * @param {number} [width=80] screen width, defaults to 80.
 * @param {number} [height=60] screen height, defaults to 60.
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/**
 * Prototype function to resize 'screen'.
 *
 * @param {number} width
 * @param {number} height
 */

Size.prototype.resize = function (width, height) {
  this.width = width;
  this.height = height;
};

/**
 * Prototype function for 'screen' position.
 *
 * @param {number} [x=0] horizontal position.
 * @param {number} [y=0] vertical position.
 */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

/**
 * Prototype function to reposition 'screen'.
 *
 * @param {number} x
 * @param {number} y
 */
Position.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

/**
 * Class representig program window.
 */
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * Resizes window to new size.
   *
   * @param {Size} newSize
   */
  resize(newSize) {
    if (newSize.width < 1) {
      newSize.width = 1;
    }
    if (newSize.width > this.screenSize.width - this.position.x) {
      newSize.width = this.screenSize.width - this.position.x;
    }

    if (newSize.height < 1) {
      newSize.height = 1;
    }
    if (newSize.height > this.screenSize.height - this.position.y) {
      newSize.height = this.screenSize.height - this.position.y;
    }

    this.size = newSize;
  }

  /**
   * Moves windows to new position.
   * @param {Position} newPosition
   */
  move(newPosition) {
    // From https://exercism.org/tracks/javascript/exercises/windowing-system/solutions/SleeplessByte
    // As future reference can be done like this instead like with `resize`.
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));

    this.position.move(newX, newY);
  }
}

/**
 * Changes window to predefined position and size.
 *
 * @param {ProgramWindow} window
 *
 * @returns {ProgramWindow}
 */
export function changeWindow(window) {
  window.move(new Position(100, 150));
  window.resize(new Size(400, 300));

  return window;
}
