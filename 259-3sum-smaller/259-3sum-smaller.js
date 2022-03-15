/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
        if( nums.length === 0 )
        return [];
    
    let res = 0;
    nums.sort((a, b) =>  a-b );
    
    for( let i = 0; i < nums.length-2; i++ ) {
        let lp = i+1, rp = nums.length-1;

        while( lp < rp ) {
            let currSum = nums[lp] + nums[rp] + nums[i];
            if( currSum < target ) {
                res += rp - lp;
                lp++;
            }  else {
                rp--;
            }
        }
    }
    
    return res;
};