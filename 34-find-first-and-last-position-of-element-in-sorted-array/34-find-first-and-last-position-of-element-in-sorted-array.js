/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = search( leftMost=true );
    let right = search( leftMost=false );
    
    return [ left, right ];
    
    function search( leftMost ) {
        let lp = 0, rp = nums.length-1;
        let i = -1;
        
        while( lp <= rp ) {
            let mid = Math.floor( lp + (rp-lp)/2 );
            
            if( target > nums[mid] ) {
                lp = mid + 1;    
            } else if( target < nums[mid] ) {
                rp = mid - 1;
            } else {
                i = mid;
                if( leftMost )
                    rp = mid-1;
                else
                    lp = mid+1; 
            }
        }
        
        return i
    }
};