/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {            
    for( let i = 0; i< nums.length; i++ ) {
        let index = nums[i] - 1;
        
        if( i === index || nums[i] === nums[index] ) continue;
        if( index >= 0 && index <= nums.length - 1 ) {
            [nums[i], nums[index] ] = [ nums[index], nums[i] ];
            i--;
        }
    }
    
    for( let i = 0; i< nums.length; i++ ) {
        if( i+1 !== nums[i] )
            return i+1
    }
    
    return nums.length + 1;
};