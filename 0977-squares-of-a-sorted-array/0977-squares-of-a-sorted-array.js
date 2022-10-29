/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let lp=0, rp=nums.length-1;
    let res = new Array(nums.length);
    let ri = nums.length-1;
    
    while( lp<=rp ) {
        let sqrtL = nums[lp]*nums[lp];
        let sqrtR = nums[rp]*nums[rp];
        
        if( sqrtR >= sqrtL ){
            res[ri] = sqrtR
            rp--;
        } else {
            res[ri] = sqrtL
            lp++;
        }
        ri--;
    }
    
    return res;
};