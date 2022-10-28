/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0, ri= 0;
    
    while( i<nums.length ) {
        if( nums[i] !== 0 ) {
            nums[ri] = nums[i];
            ri++;
        }
        
        i++;
    }
    
    while( ri<nums.length ) {
        nums[ri] = 0;
        ri++;
    }
};