/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    nums.sort((a,b) => a-b);
    let lp=0, rp = nums.length-1;
    let ans = new Array(nums.length), ri = 0;
    
    while( lp < rp) {
        ans[ri++] = nums[lp++];
        ans[ri++] = nums[rp--];
        
        if( lp === rp )
            ans[ri] = nums[lp];
    }

    return ans;
};