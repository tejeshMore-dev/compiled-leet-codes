/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lp = 0, rp = nums.length-1;
    let res = -1;
    
    while( lp <= rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        
        if( nums[mid] === target )
            return res = mid;
        
        // left half: strict increasing
        if( nums[mid] >= nums[lp] ) {
            if( target >= nums[lp] && target <= nums[mid] )
                rp = mid-1;
            else
                lp = mid+1;
        } else { // right half: strict increasing
            if( target >= nums[mid] && target <= nums[rp] )
                lp = mid +1;
            else
                rp = mid-1;
            
        }
    }
    
    return res;
};