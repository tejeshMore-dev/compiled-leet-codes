/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];
    
    for( let i=0; i<nums.length; i++ ) {
        let num = Math.abs(nums[i]);
        if( nums[ num -1 ] < 0 ) {
            result.push(num)
        }
        
        nums[ num-1 ] = nums[ num-1 ] * -1;
    }
    
    return result;
};