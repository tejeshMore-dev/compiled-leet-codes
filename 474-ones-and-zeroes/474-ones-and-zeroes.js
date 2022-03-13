/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// /* TOP Down Approach
var findMaxForm = function(strs, m, n) {
    let cache = new Map();
    return helper( 0, m , n );
    
    function helper( i, zeroes, ones ) {
        if( i === strs.length )
            return 0;
        
        if( cache.has(`${i}-${zeroes}-${ones}`) )
            return cache.get(`${i}-${zeroes}-${ones}`);
        
        let [ z, o ] = count(strs[i]);
        let opt_taken = -1;
        if(  zeroes - z >= 0 && ones - o >= 0 ) {
            opt_taken = helper( i+1, zeroes-z, ones-o ) + 1;
        }
        let opt_not_taken = helper( i+1, zeroes, ones )
        
        cache.set(`${i}-${zeroes}-${ones}`, Math.max( opt_taken, opt_not_taken )); 
        return cache.get(`${i}-${zeroes}-${ones}`);
    }
    
    function count( str ) {
        let ans = [ 0, 0 ];
        
        for( let i=0; i < str.length; i++ ) {
           if( str[i] === "0" )
               ans[0]++;
            else
                ans[1]++
        }
        
        return ans;
    }
};
// */