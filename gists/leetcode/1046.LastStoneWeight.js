/**
 * 1046. Last Stone Weight
 * Array, Heap
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length < 2) return stones;
    stones.sort((a,b) => a-b);
    let a = stones.pop();
    let b = stones.pop();
    stones.push(Math.abs(a-b));
    return lastStoneWeight(stones);
};
