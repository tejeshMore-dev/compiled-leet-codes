/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let length = nums.length, ans = new Array( length * 2 );
    for( let i = 0; i < nums.length; i++ ) {
        ans[i] = nums[i];
        ans[i+length] = nums[i];
    }
    
    return ans;
};