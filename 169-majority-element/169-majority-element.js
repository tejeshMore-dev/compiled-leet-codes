/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let ans;
    
    for( let num of nums ) {
        if( count === 0 ) {
            ans = num
            count++;            
        } else if( num === ans ) {
            count++;
        } else {
            count--;
        }
    }
    
    return ans
};