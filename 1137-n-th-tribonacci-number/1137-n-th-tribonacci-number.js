/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let cache = {};
    return helper(n);
    
    function helper(n) {
        if( n == 0 || n == 1 || n == 2 )
            return n == 0 ? 0 : 1;
    
        if( cache.hasOwnProperty(n) )
            return cache[n];
        
        let ans = helper(n-1) + helper(n-2) + helper(n-3);
        cache[n] = ans;
        return ans;
    }
};