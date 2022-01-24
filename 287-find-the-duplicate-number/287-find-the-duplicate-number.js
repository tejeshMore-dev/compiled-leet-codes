/**
 * @param {number[]} nums
 * @return {number}
 */
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



