/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort((a, b) => a - b );
    let lp = 0, rp = nums.length-1, result = -1;
    
    while( lp < rp ) {
        let sum = nums[lp] + nums[rp];
        
        if( sum >= k )
            rp--;
        if( sum < k ) {
            lp++;
            result = Math.max(result, sum);            
        }
    }
    
    return result

};