/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { // TC: O(N) SC:O(N)
    let map = new Map();
    
    for( let i=0; i<nums.length; i++ ) {
        let num = nums[i];
        let diff = target - num;
        
        if( map.has(diff) )
            return [ map.get(diff), i]
        
        map.set(num, i);
    }
};