/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let MAX = Number.MAX_VALUE;
    let dp = new Array( coins.length+1 ).fill( a => new Array( amount+1 ) );
    
    for( let cI = 0; cI <= coins.length; cI++ ) {
        for( let s = 0; s <= amount; s++ ) {
            if( s === 0 )
                dp[cI][s] = 1
            else if( cI === 0 )
                dp[cI][s] = 0;
            else if( coins[cI-1] > s )
                dp[cI][s] = dp[cI-1][s];
            else
                dp[cI][s] = dp[cI][s-coins[cI-1]] + dp[cI-1][s];
                
        }
    }
    return dp[coins.length][amount]; 
};