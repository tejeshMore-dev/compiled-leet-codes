/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0], maxProfit = 0;
    
    for( let i = 1; i< prices.length; i++ ) {
        if( prices[i] < prices[i-1] )
            minPrice = Math.min( minPrice, prices[i] );
        else
            maxProfit = Math.max( maxProfit, prices[i] - minPrice )
    }
    
    return maxProfit;
};