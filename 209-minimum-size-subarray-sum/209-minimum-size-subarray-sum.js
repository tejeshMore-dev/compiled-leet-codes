/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const MAX = Number.MAX_VALUE;

var minSubArrayLen = function(target, nums) {
    let lp = 0, sum = 0, res = MAX;
    
    for( let rp = 0; rp < nums.length; rp++ ) {
        sum += nums[rp];
        
        if( sum >= target ) {
            while( sum >= target && lp < nums.length ) {
                res = Math.min( res, rp-lp+1 );
                sum -= nums[lp]; 
                lp++;
            }
        };
    }
    
    return res === MAX  ? 0 : res;
};