/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// /* Top Down Approach
var findTargetSumWays = function(nums, target) {
    let ans = 0;
    helper( 0, 0 );
    return ans;
    
    function helper( i, sum ) {
        if( i === nums.length ) {
            if( sum === target )
                ans++;
            return;
        }
        
        helper( i+1, sum + nums[i] );
        helper( i+1, sum - nums[i] );
    }
};
// */

/* Bottom up Approach
var findTargetSumWays = function(nums, target) {
    let sols = new Map();
    sols.set(`${nums.length}-${target}`, 1);
    
    for(  )
}
*/