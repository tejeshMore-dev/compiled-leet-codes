/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lp = 0, rp = nums.length-1, result = -1;
    
    while( lp <= rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        
        if( nums[mid] === target )
            return result = mid;
        if( nums[mid] < target )
            lp = mid+1;
        else
            rp = mid-1;
    }
    
    return result;
};