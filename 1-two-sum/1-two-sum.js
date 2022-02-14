/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for( let i in nums ) {
        let num = nums[i], val = target - num; 
        
        if( map.has(val) ) {
            return [ map.get(val), i ]
        }
        map.set(num, i);
    }
};