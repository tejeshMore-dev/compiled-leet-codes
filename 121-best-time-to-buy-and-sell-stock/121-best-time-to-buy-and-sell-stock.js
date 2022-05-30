/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if( prices.length < 2 )
        return 0;
    
    let ans = 0, minPrice = prices[0];
        
    for( let price of prices ) {
        ans = Math.max( price - minPrice, ans );
        minPrice = Math.min( minPrice, price );
    }
    
    return ans;
};