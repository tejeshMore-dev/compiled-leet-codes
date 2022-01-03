/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let sp = 0;
    let fp = 0;
    
    while (1) {
        sp = nums[sp];
        fp = nums[nums[fp]];
        
        if(sp === fp)
            break
    }
    
    let sp2 = 0;
    while (1) {
        sp = nums[sp];
        sp2 = nums[sp2];
        
        if(sp === sp2)
            return sp
    }
};