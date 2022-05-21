/**
 * 322. Coin Change
 * Array, Dynamic Programming, BFS
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins = coins.sort((p, q) => p - q);
  var len = coins.length;
  var dp = [];
  dp.length = amount + 1;
  dp.fill(+Infinity);
  dp[0] = 0;

  for (var i = 1; i <= amount; i++) {
    for (var j = 0; j < len; j++) {
      if (coins[j] > i) {
        continue;
      }
      dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
    }
  }

  return dp[amount] === +Infinity ? -1 : dp[amount];
};
