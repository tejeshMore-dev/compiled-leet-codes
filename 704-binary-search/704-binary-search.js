/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lp = 0, rp = nums.length-1;
    let result = -1;
    
    while( lp <= rp ) {
        let mid = lp + Math.floor((rp-lp)/2 );
        
        if( nums[mid] === target )
            return result = mid;
        
        if( nums[mid] < target )
            lp = mid+1;    
        else
            rp = mid-1;
    }
    
    return result;
};