/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let lp = 0, hp = nums.length-1, result = -1;
    
    while( lp <= hp ) {
        let mid = Math.floor( lp + (hp-lp)/2 );
        
        if( nums[mid] === target ) 
            return result = mid;
        
        if( nums[mid] < target ) 
            lp = mid+1;
        else 
            hp = mid-1;        
    }
    
    return result
};