/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lp = 0, rp = nums.length-1;
    if( nums[rp] > nums[lp] ) return nums[lp];
    
    
    while( lp < rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        
        if( nums[mid] > nums[rp]) {
            lp = mid+1;
                        
        } else if( nums[mid] < nums[lp] ) {
            rp = mid;
            lp--;
        }
        else
            rp--;
    }
    
    return nums[lp]
};

