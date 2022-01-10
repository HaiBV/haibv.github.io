// 121. Best Time to Buy and Sell Stock
// Array, Dynamic Programming

function maxProfit(prices: number[]): number {
  let max: number = 0;
  let curMax: number = 0;

  for (let i = 1; i < prices.length; i++) {
    curMax = Math.max(0, curMax + prices[i] - prices[i - 1]);
    max = Math.max(curMax, max);
  }

  return max;
}

// prices = [7,1,5,3,6,4]
// prices = [7,6,4,3,1]
