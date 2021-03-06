/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let c = 0;
    let lp = 0, rp = 0;
    let ans = 0;
    
    while( rp < nums.length ) {
        if( nums[rp] === 0 ) {
            c++;
        }
        
        if( c === k+1 ) {
            while( c === k+1 ) {
                if( nums[lp] === 0 )
                    c--;
                lp++;
            }
        }
        
        ans = Math.max( ans, rp-lp+1 );
        rp++;
    }
    
    return ans;
};