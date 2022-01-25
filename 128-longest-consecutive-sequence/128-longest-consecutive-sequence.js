/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    let set = new Set(), ans = 1;
    
    for( let i = 0; i < nums.length; i++ ) {
        set.add(nums[i]);
    }
  
    for( let i = 0; i < nums.length; i++ ) {
       if( !set.has(nums[i] -1) ) {
           let count = 1, val = nums[i];
           while( set.has(++val) ) {
               count++;
           }
           
           ans = Math.max(ans, count);
       }
    }
    
    return ans
};