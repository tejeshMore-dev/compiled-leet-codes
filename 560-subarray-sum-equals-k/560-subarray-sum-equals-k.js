/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let currSum = 0;
    let prefixCount = { 0: 1 };
    let res = 0;
    
    for( let num of nums ) {
        currSum += num;
        let prefix = currSum - k;
            
        res += prefixCount[prefix] || 0;
        
        if( !prefixCount.hasOwnProperty(currSum) )
            prefixCount[currSum] = 0;
        
        prefixCount[currSum] += 1;
    }
    
    return res;
};


/*
i 
1 2 3
[1] []
[12] [1] [2] []
[123] [12] [13] [1] [23] [2] [3] []








*/