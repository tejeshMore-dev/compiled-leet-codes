/**
 * @param {number[]} nums
 * @return {number}
 */
/*
var findDuplicate = function(nums) {
    let sp = nums[0], fp = nums[nums[0]];
    
    while( sp !== fp ) {
        sp = nums[sp];
        fp = nums[nums[fp]];
    }
    
    fp = 0;
     while( sp !== fp ) {
        sp = nums[sp];
        fp = nums[fp];
    }
    
    return sp;
};
*/
var findDuplicate = function(nums) {
    let res;
    
    for( let i in nums ) {
        let index = Math.abs( nums[i] ) - 1;
        
        if( nums[index] < 0 )
            return Math.abs( nums[i] )
        
        nums[index] *= -1;
    }
    
    return res;
}


