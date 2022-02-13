/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    return dfs( nums, [], Array(nums.length).fill(false), [] )
};

function dfs( nums, permutation, used, res ) {
    if( permutation.length === nums.length ) {
        res.push( [ ...permutation ] );
        return
    }
    
    for( let i = 0; i < nums.length; i++ ) {
        if( used[i] )
            continue
        
        permutation.push(nums[i])
        used[i] = true;
        dfs(nums, permutation, used, res)
        permutation.pop();
        used[i] = false;
    }
    
    return res;
}

/*
123

123
[123] [231] [  ]














*/

