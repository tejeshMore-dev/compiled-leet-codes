/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];
    let subset = [];
    helper(0);
    return ans;
    
    function helper(i) {
        console.log(i, subset)
        if( i === nums.length ) {
            ans.push( [ ...subset ] )
            return
        }
        
        subset.push(nums[i]);
        helper( i+1 );
        
        subset.pop();
        helper( i+1 );                
    }
};

/*
two choices we can have either use ith value or don't use it.
decision tree will look like below

[] [1] 
[] [2] [1] [12]
[] [3] [2] [23] [1] [13] [12] [123] 

*/















