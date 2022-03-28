/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length);
    
    let prefix = 1;
    for( let i in nums ) {
        res[i] = prefix;
        prefix *= nums[i];
    }
    
    let postfix = 1;
    for( let i = nums.length-1; i >= 0; i-- ) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    
    return res
};
/*


solution(i, p, s)
    p==0
    return 
    
    s==li
    return nums[li]

    solution
    
    
    
    
    
    
1 2 3 4
1 1 2 6
24 12 4 1

24 12  




























*/

