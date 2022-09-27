/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lp =0, rp = nums.length-1;
    
    while( lp < rp ) {
        let mid = lp + Math.ceil((rp-lp)/2);
        // console.log(mid);
        
        if( nums[mid] > target )
            rp = mid-1;
        else
            lp = mid;
    }
    
    return nums[lp] === target ? lp : -1
};

/*
9

-1 0 3 5 9 12
         lr           
 

mid > target
r = mid - 1

else
l = mid 
*/