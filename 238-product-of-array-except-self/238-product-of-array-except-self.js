/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let suffix = new Array(nums.length+1).fill(1);
    let prefix = new Array(nums.length+1).fill(1);
    let result = new Array(nums.length);
    
    for(let i=0; i<nums.length; i++ ) {
        prefix[i+1]= nums[i]*prefix[i];
        suffix[nums.length-i-1]= nums[nums.length-i-1] * suffix[nums.length-i] ;   
    }
    
    for(let i=0; i<nums.length; i++ ) {
        result[i] = prefix[i] * suffix[i+1]
    }
    
    return result;
};
/*
  1  2  3  4

  1 1  2  6  24 // prefix
  24 24 12 4  1//sufix
  24 12 8  6
*/