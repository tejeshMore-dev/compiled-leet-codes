/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let map = { 0:0, 1:0, 2:0 }
    
    for( let num of nums ) {
        map[num] = map[num] + 1;
    }
    
    let i = 0;
    for( let key in map ) {
        while( map[key] > 0 ) {
            nums[i++] = key;
            map[key] = map[key] - 1;
        }
    }
    
};