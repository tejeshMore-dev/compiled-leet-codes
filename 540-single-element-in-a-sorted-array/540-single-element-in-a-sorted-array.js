/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let ans = 0;
    
    for( let num of nums ) {
        ans ^= num;
    }
    
    return ans;
}