/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) { // TC:O(N) SC:O(N)
    let set = new Set();
    
    for (let num of nums) {
        if( set.has(num) )
            return true
        
        set.add(num);
    }
    
    return false;
};