/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subset = [], result = [];
    
    function helper( i ) {
        if( i === nums.length ) {
            result.push( [ ...subset ] );
            return
        }
        
        subset.push( nums[i] );
        helper( i+1 );
        subset.pop();
        
        helper( i+1 );
    }
    
    helper( 0 );
    return result;
};

/*
two choices we can have either use ith value or don't use it.
decision tree will look like below

[] [1] 
[] [2] [1] [12]
[] [3] [2] [23] [1] [13] [12] [123] 

*/















