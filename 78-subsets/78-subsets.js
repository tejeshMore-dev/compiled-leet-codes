/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    return helper( 0, [], [] );
    
    function helper(i, temp, ans) {
        if( i === nums.length ) {
            ans.push( temp )
            return
        }
        
        helper( i+1, [ ...temp, nums[i] ], ans );
        helper( i+1,temp, ans );
        
        return ans 
    }
};

/*

[] [1] 
[] [2] [1] [12]
[] [3] [2] [23] [1] [13] [12] [123] 















*/















