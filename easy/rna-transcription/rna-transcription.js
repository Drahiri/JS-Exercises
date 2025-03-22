// https://exercism.org/tracks/javascript/exercises/rna-transcription
// @ts-check

/**
 * Translate DNA to RNA.
 * 
 * @param {string} dna
 * 
 * @returns {string}
 */

export const toRna = (dna) => {
  let rna = ""  

  for (let letter of dna) {
    switch (letter) {
        case "G":
            rna += "C";
            break;
        case "C":
            rna += "G"
            break;
        case "T":
            rna += "A";
            break;
        case "A":
            rna += "U"
        default:
            break;
    }
  }
  return rna;
};


// Solution based on https://exercism.org/tracks/javascript/exercises/rna-transcription/solutions/rjohnson4444

// const dnaToRNA = {
//     "G": "C",
//     "C": "G",
//     "T": "A",
//     "A": "U",
// }

// /**
//  * Translate DNA to RNA.
//  * 
//  * @param {string} dna
//  * 
//  * @returns {string}
//  */
// export const toRna = (dna) => {
//     return dna.split("").map((letter) => {return dnaToRNA[letter]}).join("");
// };