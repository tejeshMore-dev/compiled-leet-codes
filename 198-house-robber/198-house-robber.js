/**
 * @param {number[]} nums
 * @return {number}
 */

/* bottom up O(N) O(1)
var rob = function(nums) {
    let rob1 = 0;
    let rob2 = 0;
    
    for( let num of nums ) {
        let max = Math.max( num + rob1, rob2 );
        rob1 = rob2;
        rob2 = max;
    }
    
    return rob2;
}
*/

// /* top down O(N) O(N)
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
// */