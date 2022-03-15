/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let k = 2;
    let c = 0;
    let lp = 0, rp = 0;
    let ans = 0;
    
    while( rp < nums.length ) {
        if( nums[rp] === 0 ) {
            c++;
        }
        
        if( c === k ) {
            while( c === 2 ) {
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