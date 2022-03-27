/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let lp = 0;
    let rp = nums.length-1;
    
    while ( lp <= rp ) {
        let pointer = Math.floor(lp + (rp-lp) / 2);
        let pointerVal = nums[pointer]
        
        if( pointerVal === target ){
            lp = pointer;
            break
        }
        else if( target > pointerVal )
            lp = pointer+1;
        else
            rp = pointer-1;
    }
    
    return lp;
};