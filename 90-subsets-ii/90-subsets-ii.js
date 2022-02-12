/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ans = [];
    let subset = [];
    nums.sort();
    helper( 0 );
    return ans;
    
    function helper( i ) {
        // console.log(i, subset);
        
        if( i === nums.length ) {
            ans.push([...subset]);
            return;
        }
        
        subset.push(nums[i]);
        helper( i+1 );
        
        while( i+1 < nums.length && nums[i] === nums[i+1] )
            i++;
        subset.pop()
        helper( i+1 );
    }
};