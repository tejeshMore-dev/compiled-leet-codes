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

var climbStairs = function(n) {
    let cache = {};
    let target = n;
    
    function backtrack(n) {
        if(cache[n])
            return cache[n]
        
        if( n >= target ) {
            if(n === target)
                return 1
            return 0
        }
        
        let count = backtrack(n + 1) + backtrack(n + 2)
        cache[n] = count;
        return count
    }
    
    return backtrack(0)
};