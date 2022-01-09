/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = 0;
    
    let p1 = 0;
    let p2 = 0;
    let sum = 0;
    
    while ( p1 !== nums.length && p2 !== nums.length ) {
        if( sum + nums[p2] >= target ) {
            sum -= nums[p1];
            result = result === 0 ? p2 - p1 + 1 : Math.min( result, p2 - p1 + 1 );
            p1++;
        } else {
            sum += nums[p2];
            p2++;
        }
        
    }
    
    return result;
};