/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    return dfs( nums, [], Array(nums.length).fill(false), [] )
};

function dfs( nums, p, used, res ) {
    if( p.length === nums.length ) {
        res.push( Array.from(p) )
        return
    }
    
    for( let i = 0; i < nums.length; i++ ) {
        if( used[i] )
            continue;
        
        p.push(nums[i]);
        used[i] = true;
        
        dfs(nums, p, used, res);
        
        p.pop();
        used[i] = false;
    }    
    return res;
}
/*
123

123
[123] [231] [  ]














*/

