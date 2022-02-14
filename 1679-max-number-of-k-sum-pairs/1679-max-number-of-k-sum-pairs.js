/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let result = 0, map = {};
    
    for( let i = 0; i < nums.length; i++ ) {
        let val = k - nums[i];
        if( map[val] ) {
            result++;
            map[val] = map[val] - 1;
        } else {
            map[nums[i]] = map[nums[i]] ? map[nums[i]]+1: 1
        }
    }
    
    return result;
};