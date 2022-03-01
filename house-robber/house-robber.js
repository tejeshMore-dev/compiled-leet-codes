/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let cache = {};
    
    return helper(0);
    
    function helper(i) {
        if( i >= nums.length )
            return 0;

        if( cache.hasOwnProperty(i) )
            return cache[i];
        
        let ans = Math.max( helper(i+1), helper(i+2) + nums[i] );
        cache[i] = ans;
        return ans;
    }
}      