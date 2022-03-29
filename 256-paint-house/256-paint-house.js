/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
   let dp = [ 0, 0, 0 ];
    
    for( let cost of costs ) {
        let c0 = cost[0] + Math.min(dp[1], dp[2]);
        let c1 = cost[1] + Math.min(dp[0], dp[2]);
        let c2 = cost[2] + Math.min(dp[0], dp[1]);
        
        dp = [ c0, c1, c2 ];
    }
    
    return Math.min( ...dp )
};