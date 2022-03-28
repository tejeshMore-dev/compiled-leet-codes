/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = nums.length;
    let reach = 0;
    
    for( let i=0; i < nums.length; i++ ) {        
        if( reach < i )
            return false;
        reach = Math.max(reach, i + nums[i])
        
    }
    
    return true;
};