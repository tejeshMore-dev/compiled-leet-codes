/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if( n <= 2 )
        return n;
    
    let prev1 = 1;
    let prev2 = 2;
    let ans;
    
    for( let i=3; i<=n; i++ ) {
        ans = prev1+prev2;
        prev1 = prev2;
        prev2 = ans;
    }
    
    return ans;
};