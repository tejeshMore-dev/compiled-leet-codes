/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let currMin = 1, currMax = 1;
    let res = nums[0];
    
    for( let i=0; i<nums.length; i++ ) {        
        let num = nums[i];
        
        if( num === 0 ) {
            currMin = 1;
            currMax = 1;
            res = Math.max( res, num );
            continue;
        }
        
        let temp = Math.max( num, num * currMax, num * currMin );
        currMin = Math.min( num, num * currMax, num * currMin );
        currMax = temp
        
        res = Math.max( res, currMax );
    }
    
    return res;
};