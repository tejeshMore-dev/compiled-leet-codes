/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = { num:nums[0], count:1 };
    
    for( let i=1; i<nums.length; i++ ) {
        if( !res.count )
            res = { num:nums[i], count:1 }
        else if( nums[i] === res.num )
            res.count++;
        else {
            res.count--;            
        }
    }
    
    
    return res.num
};