/**
 * @param {number} n
 * @return {number}
 */
/*
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
*/

// DP Solution
var climbStairs = function(n) {
    let cache = {};
    return backtrack( 0 );
    
    function backtrack( i ) {
        if( cache[i] )
            return cache[i];
        
        if( i >= n ) {
            if( i === n )
                return 1;
            return 0;
        }
        
        let steps = backtrack( i+1 ) + backtrack( i+2 )
        cache[i] = steps;
        return steps;
    }
};