/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lp = 0, rp = nums.length-1;
    
    while( lp < rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        
        if( nums[mid] > nums[rp] ) {
            lp = mid+1;
        } else {
            rp= mid;
        }
    }
    
    return nums[lp]
};