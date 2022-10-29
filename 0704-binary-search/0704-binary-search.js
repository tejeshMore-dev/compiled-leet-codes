/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lp=0, rp =nums.length-1;
    
    while( lp<=rp ) {
        let mid = lp + Math.floor((rp-lp)/2);
        
        if( target > nums[mid] ) {
            lp = mid+1;
        } else if( target < nums[mid] ) {
            rp = mid-1;
        } else 
            return mid
    }
    
    return -1
};