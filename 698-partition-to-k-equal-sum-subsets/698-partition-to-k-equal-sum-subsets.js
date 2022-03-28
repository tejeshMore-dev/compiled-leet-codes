/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = 0;
    for( let num of nums ) {
        sum += num;
    }
    
    if( sum % k !== 0 ) {
        return false;       
     }
    let target = sum/k;
    nums.sort((a, b) => b-a);
    let used = new Array(nums.length).fill(false);
    return backtrack(0, k, subSetSum=0 );
    
    function backtrack( i, k, subSetSum ) {
        if( k === 0 )
            return true
        
        if( subSetSum === target )
            return backtrack( 0, k-1, 0 );
        
        for( let j=i; j <nums.length; j++ ) {
            if( used[j] || nums[j] + subSetSum > target )
                continue;
            
            used[j] = true;
            if( backtrack( j+1, k, nums[j] + subSetSum ))
                return true
            used[j] = false;   
        }
        
        return false;
    }
};