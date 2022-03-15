/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let c = 1;
    let p = 1;
    
    for( let i=1; i <nums.length; i++ ) {
        if( nums[i] === nums[i-1] ) {
            c++;
        } else {
            c = 1;
        }
        
        if( c <= 2  )
            nums[p++] = nums[i]
    }
    
    return p;
};