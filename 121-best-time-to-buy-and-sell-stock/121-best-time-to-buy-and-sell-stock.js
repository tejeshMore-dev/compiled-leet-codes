/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    if( prices.length < 2 )
        return maxProfit;
    
    let minPrice = prices[0];
    
    for( let i=1; i<prices.length; i++ ) {
        if( minPrice < prices[i]  ) {
            maxProfit = Math.max( maxProfit, prices[i]-minPrice );        
        } else
            minPrice = Math.min(minPrice, prices[i]);
    }
    
    return maxProfit;
};
/*
 [7,1,5,3,6,4]
 
profit 5
minPrice 1
*/