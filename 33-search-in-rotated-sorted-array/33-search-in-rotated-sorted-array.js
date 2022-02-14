/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lp = 0, rp = nums.length-1, result = -1;
    
    while( lp < rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        if( target === nums[mid] ) return lp = mid
        
        if( target > nums[mid] ) {
            if(  target > nums[rp] && nums[mid] < nums[lp] ) {
                rp = mid - 1;
            } else {
                lp = mid + 1; 
            }
        } else {
            if( target < nums[lp] && nums[mid] > nums[rp] ) {
                lp = mid + 1
            } else {
                rp = mid - 1
            }
        }
        
        
    }
    
    return nums[lp] === target ? lp : -1;
};