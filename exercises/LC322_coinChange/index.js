function coinChange(coins, amount) {
    //Time complexity O(N^2) due to nested for loops
    //time complexity O(N) n is length of dp array
    let dpMinCoins = new Array(amount + 1).fill(Infinity);
    dpMinCoins[0] = 0;

    for(let i = 1; i < dpMinCoins.length; i++) {
        for(let j = 0; j < coins.length; j++) {
            const coinValue = coins[j];
            if(coinValue <= i) {
                dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1, dpMinCoins[i])
            }
        }
    }

    const answer = dpMinCoins[dpMinCoins.length - 1];
    return answer === Infinity ? -1 : answer;
}

module.exports = coinChange;
