// https://exercism.org/tracks/javascript/exercises/matrix
// @ts-check


export class Matrix {
    /**
     * @param {string} stringMatrix 
     */
    constructor(stringMatrix) {
      this.matrix = stringMatrix.split("\n").map(val => val.split(" ").map(Number));
    }
  
    /**
     * @returns {number[][]}
     */
    get rows() {
      return this.matrix;
    }
    
    /**
     * @returns {number[][]}
     */
    get columns() {
      // Solution from - https://exercism.org/tracks/javascript/exercises/matrix/solutions/BlakeVollbrecht
      return this.matrix[0].map((_el, i) => {
        return this.matrix.map(row => row[i]);
      });
    }
  }