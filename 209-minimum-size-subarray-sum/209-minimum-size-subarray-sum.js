/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const MAX = Number.MAX_VALUE;
    let result = MAX;
    let p1 = 0, p2 = 0, currentSum = 0;
    
    while( p2 < nums.length ) {
        currentSum += nums[p2];
        
        while( currentSum >= target ) {
            result = Math.min( result, p2-p1+1 );
            currentSum -= nums[p1++];
        }
        p2++;
    }
    
    return result === MAX ? 0 : result;
};