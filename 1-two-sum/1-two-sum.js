/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { // TC: O(N) SC:O(N)
    let map = {};
    
    for( let i=0; i<nums.length; i++ ) {
        let num = nums[i];
        let val = target - num;
        
        if( map.hasOwnProperty(val) )
            return [ map[val], i ];
        
        map[num] = i;
    }
};