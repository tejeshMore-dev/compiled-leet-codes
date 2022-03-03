/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let ans = 0;
    helper( 0, 0 );
    return ans;
    
    function helper( i, sum ) {
        if( i === nums.length ) {
            if( sum === target )
                ans = ans + 1;
    
            return 
        }
        
        helper( i+1, sum + nums[i] );
        helper( i+1, sum - nums[i] );        
    }
};