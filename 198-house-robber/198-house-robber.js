/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let cache = new Array(nums.length).fill(-1);
    
    return helper(0);
    
    function helper(i) {
        if( i >= nums.length )
            return 0;

        if( cache[i] > -1 )
            return cache[i];
        
        let ans = Math.max( helper(i+1), helper(i+2) + nums[i] );
        cache[i] = ans;
        return ans;
    }
}

/*

*/

      