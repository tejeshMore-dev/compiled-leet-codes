/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    
    for( let i=1; i < nums.length; i++ ) {
        for( let j=0; j < i; j++ ) {
            if( nums[i] > nums[j] )
                dp[i] = Math.max( 1+dp[j], dp[i] )
        }
    }
    
    return Math.max( ...dp )
};

/*
 10 15


 1 

    
    
    
    
    
    
    
*/