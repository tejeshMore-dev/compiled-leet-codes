/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ans = [];
    let subset = [];
    nums.sort();
    
    function helper( i ) {        
        if( i === nums.length ) {
            ans.push([...subset]);
            return;
        }
        
        subset.push(nums[i]);
        helper( i+1 );
        subset.pop();
        
        while( i+1 < nums.length && nums[i] === nums[i+1] )
            i++;
        helper( i+1 );
    }
    
    
    helper( 0 );
    return ans;
};