/*
* Best Time to Buy and Sell Stock
*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

  1 <= prices.length <= 105
  0 <= prices[i] <= 104

* */

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   if (!Array.isArray(prices)) {
//     return 0;
//   }
//
//   const SIZE = prices.length;
//   if (SIZE < 2) {
//     return 0;
//   }
//
//   let bestBuyingPrice = {
//     "price": prices[0],
//     "index": 0
//   };
//   let bestSellingPrice  = 0;
//   // let leastPriceFound = false;
//
//   for (let i = 1; i < SIZE; i++) {
//     if (prices[i] < bestBuyingPrice["price"]) {
//       bestBuyingPrice["price"] = prices[i];
//       bestBuyingPrice["index"] = i;
//     }
//   }
//
//   if (bestBuyingPrice["index"] === SIZE - 1) {
//     return 0;
//   }
//
//   for (let j = bestBuyingPrice["index"]; j < SIZE; j++) {
//     if (prices[j] > bestSellingPrice) {
//       bestSellingPrice = prices[j];
//     }
//   }
//
//
//   const profit = bestSellingPrice - bestBuyingPrice["price"];
//   return profit > 0 ? profit : 0;
// };

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2,4,1]));
console.log(maxProfit([2,1,2,1,0,1,2]));
console.log(maxProfit([7,2,5,3,7,4,1,10]));
