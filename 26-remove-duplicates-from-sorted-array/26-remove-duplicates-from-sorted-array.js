/**
 * @param {number[]} nums
 * @return {number}
 */
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