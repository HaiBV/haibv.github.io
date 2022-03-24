/**
 * 881. Boats to Save People
 * Array, Two Points, Greedy, Sorting
 */

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  for (var i = 0, j = people.length - 1, boats = 0; i <= j; ++boats) {
    people[j--] + people[i] <= limit && ++i;
  }
  return boats;
};

numRescueBoats([1, 2], 3); // 1

numRescueBoats([3, 2, 2, 1], 3); // 3

numRescueBoats([3, 5, 3, 4], 5); // 4
