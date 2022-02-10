/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    return helper( amount, {} );
    
    function helper( remaining, cache ) {
        if( cache[`${remaining}`] )
            return cache[`${remaining}`]
        
        if( remaining < 0 )
            return -1;
        
        if( remaining === 0 )
            return 0
        
        let ans;
        let min = Number.MAX_VALUE;

        for( let coin of coins ) {
            ans = helper( remaining-coin, cache );
            
            if( ans >= 0 && ans < min )
                min = ans + 1
        }
        
      return cache[`${remaining}`] = min === Number.MAX_VALUE ? -1 : min;
    }
};

