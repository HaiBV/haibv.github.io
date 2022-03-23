/**
 * 991. Broken Calculator
 * Math, Greedy
 */
/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function (startValue, target) {
  let ans = 0;
  while (startValue < target) {
    ans++;
    if (target % 2) target++;
    else target /= 2;
  }
  return startValue - target + ans;
};

console.log(brokenCalc(2, 3)); // 2
console.log(brokenCalc(5, 8)); // 2
console.log(brokenCalc(5, 10)); // 1
console.log(brokenCalc(1024, 1)); // 1023
console.log(brokenCalc(1, 1000000000)); // 39
