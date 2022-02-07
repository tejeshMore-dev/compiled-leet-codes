/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let ans = 0;
    let cache = {}
    helper( 0, 0 );
    return ans;
    
    function helper( i, sum ) {
        if( i === nums.length ) {
            if( sum === target )
                ans++
            return
        }
        
        let num = nums[i];
        helper( i+1, sum + num );
        helper( i+1, sum - num )
    }
};