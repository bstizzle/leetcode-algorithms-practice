var maxProfit = function(prices) {
  //space complexity O(N) one for loop
  //space complexity O(1)
  let maxProfit = 0;
  let cheapestPrice = prices[0];

  for(let i = 0; i < prices.length; i++) {
    const price = prices[i]
    if(price < cheapestPrice) cheapestPrice = price;

    const currentProfit = price - cheapestPrice;
    maxProfit = Math.max(currentProfit, maxProfit);
  }

  return maxProfit;
};

module.exports = maxProfit;
