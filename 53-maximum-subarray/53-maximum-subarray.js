/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = 0;
    let res = -Number.MAX_VALUE;
    
    for( let num of nums ) {
        currSum += num;
        
        if( currSum > res ) 
            res = currSum;
        
        if( currSum < 0 )
            currSum = 0
    }
    
    return res;
};
/*

-2 1 -3 4 -1 2 1 -5 4
-2 -1 
-2 





















*/