/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if( nums.length === 1 ) return 0
    
    let lp = 0, hp = nums.length-1,result = 0;
    
    while ( lp < hp ) {
        let mid = Math.floor( lp + (hp-lp)/2 );
        
        if( nums[mid+1] > nums[mid] )
            lp = mid + 1;
        else
            hp = mid;
    }
    
    return lp;
};