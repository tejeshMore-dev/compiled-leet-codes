/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let ans = -1;
    let lp = 0, rp = nums.length-1;
    
    while( lp <= rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        
        if( nums[mid] !== nums[mid+1] && nums[mid] !== nums[mid-1] )
            return ans = nums[mid];
        
        if( ( mid%2 === 0 && nums[mid] === nums[mid+1] ) ||
            ( mid%2 === 1 && nums[mid] === nums[mid-1] ) ) {
            lp = mid+1
        } else {
            rp = mid-1;
        }
    }
    

    return ans;
}