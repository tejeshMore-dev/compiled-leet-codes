/**
 * @param {number[]} nums
 * @return {boolean}
 */


// /* sort
var containsDuplicate = function(nums) { // TC O(N) | SC O(N)
    nums.sort((a, b) => a-b );
    
    return hasDuplicate(nums);
};

const hasDuplicate = function (nums){
        for( let i=0; i < nums.length-1; i++ ) {
            if( nums[i] === nums[i+1] )
                return true
        }
        
        return false;
    }
// */

/* Hashset Equal
var containsDuplicate = function(nums) { // TC O(N) | SC O(N)
    let set = new Set(nums);
    
    return set.size !== nums.length
};
*/

/* Early Exit
var containsDuplicate = function(nums) { // TC O(N) | SC O(N)
    let set = new Set();
    
    for( let num of nums ) {
        if( set.has(num) )
            return true;
        
        set.add(num);
    }
    
    return false;
};
*/