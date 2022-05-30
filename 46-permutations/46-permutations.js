/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [], temp  = [], used = new Set();
    findPermutation( temp, used );
    return ans;
    
    function findPermutation( temp, used ) {
        if( temp.length === nums.length )
            ans.push([ ...temp ]);
        
        for( let i = 0; i < nums.length; i++ ) {
            if( used.has(nums[i]) )
                continue;
            
            used.add(nums[i]);
            temp.push(nums[i]);
            findPermutation( temp, used );
            
            temp.pop();
            used.delete(nums[i]);
        }
    }
};