/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if( prices.length < 2 )
        return 0;
    
    let lp=0, rp= lp+1;
    let maxProfit = 0;
    
    while( rp < prices.length ) {
        if( prices[lp] >= prices[rp] )
            lp = rp;
        else
            maxProfit = Math.max(maxProfit, prices[rp] - prices[lp] );
        
        rp++;
    }
    
    return maxProfit;
};
/*
 [7,6,4,1,5,-1,6,4]
 
lp -1
rp 6



*/