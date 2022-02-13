/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort();
    return dfs( nums, [], Array(nums.length).fill(false), [] )
};

function dfs( nums, permutation, used, ans ) {
    if( permutation.length === nums.length ) {
        ans.push( [ ...permutation ] );
        return;
    }
    
    for( let i = 0; i < nums.length; i++ ) {
        if( used[i] || ( i+1 < nums.length && nums[i] === nums[i+1] && !used[i+1] )) continue
        
        permutation.push( nums[i] );
        used[i] = true;
        
        dfs( nums, permutation, used, ans );
        
        permutation.pop();
        used[i] = false;
    }
    
    return ans;
}