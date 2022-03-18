/**
 * @param {number[]} nums
 * @return {boolean}
 */

// /* Top Down Approach
var canPartition = function(nums) {
    let sum = 0;
    
    for( let num of nums ) {
        sum += num;
    }
    
    if( sum%2 !== 0 )
        return false;
    
    return findSubsetSum( 0, sum/2, new Map() );
    
    function findSubsetSum( i, s, cache ) {
        if( cache.has(`${i}-${s}`) )
            return cache.get( `${i}-${s}` );
        
        if( s === 0 )
            return true
        
        if( i === nums.length )
            return false
        
        let ans = findSubsetSum( i+1, s-nums[i], cache ) || findSubsetSum( i+1, s, cache )
        cache.set( `${i}-${s}` , ans );
        return ans;
    }
};
// */

/* Bottom up Approach
var canPartition = function(nums) {

};
*/