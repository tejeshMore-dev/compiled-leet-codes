/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let min = nums[0], ans = -1;
    
    for( let i = 1; i < nums.length; i++ ) {
        if( nums[i] > min ) {
            ans = Math.max( ans, nums[i] - min );    
        }
        if( nums[i] < min ) {
            min = nums[i];
        }
        
    }
    
    return ans;
};