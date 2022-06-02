/**
 * 867. Transpose Matrix
 * Array, Matrix, Simulation
 */

var transpose = function (A) {
  return A[0].map((_, i) => A.map((b) => b[i]));
};
