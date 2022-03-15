/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let k = 2;
    let count = 0;
    let lp = 0, rp = 0;
    let ans = 0;
    
    while( rp < nums.length ) {
        if( nums[rp] === 0 ) {
            count++;
        }
        
        if( count === k ) {
            while( count === 2 ) {
                if( nums[lp] === 0 )
                    count--;
                lp++;
            }
        }
        
        ans = Math.max( ans, rp-lp+1 );
        rp++;
    }
    
    return ans;
};