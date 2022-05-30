/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for( let i in nums ) {
        let num = nums[i];
        if( map.has( target - num ) ) {
            return [ map.get(target - num), i ]
        }
        
        map.set(num, i);
    }
};