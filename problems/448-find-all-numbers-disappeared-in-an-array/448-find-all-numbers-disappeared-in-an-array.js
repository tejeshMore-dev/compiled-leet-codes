/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    
    for ( let i=0; i<nums.length; i++ ) { 
        let index = Math.abs(nums[i]) - 1;

        if( nums[index] < 0 )
            continue

        nums[index] = -1 * nums[index];
    }
    
    for ( let i=0; i<nums.length; i++ ) {
        if ( nums[i] > 0  )
            result.push(i+1)
    }
    
    return result;
};