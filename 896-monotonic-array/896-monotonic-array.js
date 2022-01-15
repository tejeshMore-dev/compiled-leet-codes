/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if( nums.length === 1 ) return true;
    
    let inc = true, dec = true;
    
    for( let i=0; i<nums.length -1; i++ ) {
        if( nums[i] > nums[i+1] ) inc = false
        if( nums[i] < nums[i+1] ) dec = false
        
    }
    
    return inc || dec;
};