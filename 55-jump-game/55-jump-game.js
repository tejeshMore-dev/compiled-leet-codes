/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = nums.length;
    let reach = 0;
    
    for( let i in nums ) {        
        if( reach < i )
            return false;
        reach = Math.max(reach,  parseInt(i) + nums[i])
        
    }
    
    return true;
};