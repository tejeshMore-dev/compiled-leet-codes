/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if( nums.length === 0 )
       return 0
    
    if( val > 50 )
        return nums.length;
    
    let i=0, ri=0;
    
    while( i<nums.length) {
        if( nums[i] !== val ) {
            nums[ri] = nums[i];
            ri++;
        }
        
        i++;
    }
    
    return ri;
};
/*
nums = [3,2,2,3], val = 3

i  3
ri 2

if nums[i] !== val
nums[ri] = nums[i]
ri++;

i++;


return ri
*/