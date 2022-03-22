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
    
    let subsetSum = sum/2;
    let cache = new Array(nums.length).fill(-1).map(a => new Array(subsetSum+1).fill(-1) );
    return findSubsetSum( 0, subsetSum, cache );
    
    function findSubsetSum( i, s, cache ) {
        if( s === 0 )
            return true
        else if( i === nums.length || s < 0 )
            return false
        
        if( cache[i][s] !== -1 )
            return cache[i][s];
        
        return cache[i][s] = findSubsetSum( i+1, s-nums[i], cache ) || findSubsetSum( i+1, s, cache );
    }
};
// */

// /* Bottom up Approach
var canPartition = function(nums) {
    let sum = 0;
    for( let num of nums ) {
        sum += num;
    }
    
    if( sum%2 !== 0 )
        return false;
    
    let subsetSum = sum/2;
    let dp = new Array(nums.length+1).fill(0).map(a => new Array(subsetSum+1).fill(0) );
    
    for( let i=0; i <= nums.length; i++ ) {
        for( let s=0; s <= subsetSum; s++  ) {
            
            if( s === 0 )
                dp[i][s] = true;
            else if ( i === 0 )
                dp[i][s] = false;
            else if ( nums[i-1] === s )
                dp[i][s] = true;
            else
             dp[i][s] = dp[i-1][s-nums[i-1]] || dp[i-1][s]
        }
    }
    
    return dp[nums.length][subsetSum];
};
// */