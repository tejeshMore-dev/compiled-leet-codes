/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(n+1).fill(1);
    
    for( let i=2; i<=n; i++ ) {
        let total = 0;
        for( let r=1; r<=i; r++ ) {
            let left = dp[r-1];
            let right = dp[i-r]
            total += left * right;
        }
        dp[i] = total;
    }
    
    return dp[n];
};