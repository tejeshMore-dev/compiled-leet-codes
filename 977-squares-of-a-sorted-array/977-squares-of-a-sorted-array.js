/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let lp = 0, hp = nums.length-1, pointer = nums.length-1;
    let result = new Array(nums.length);
    
    while( lp <= hp ) {
        if( Math.abs(nums[lp]) > Math.abs(nums[hp]) ) {
            result[pointer--] = Math.pow(nums[lp++], 2);
        } else {
            result[pointer--] = Math.pow(nums[hp--], 2);
        }
    }
    
    return result;
};