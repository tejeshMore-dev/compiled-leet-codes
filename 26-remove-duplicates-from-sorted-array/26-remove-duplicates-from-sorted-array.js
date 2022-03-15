/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if( nums.length === 0 )
        return 0;
    
    let i = 0; 
    for( let j = 1; j < nums.length; j++ ) {
        if( nums[i] !== nums[j] ) {
            nums[++i] = nums[j]
        }
    }
    
    return i+1;
};

/* Approach 2
var removeDuplicates = function(nums) {
    let pointer = 0, lastVal = null;
    
    for( let num of nums ) {
        if( num !== lastVal ) {
            nums[pointer] = num;
            pointer++;
            lastVal = num;
        }
    }
    
    return pointer
};
*/