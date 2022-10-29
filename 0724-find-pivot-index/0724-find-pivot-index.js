/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if( nums.length < 2 )
        return 0;
    
    let total = nums.reduce((sum, val) => sum+val, 0);
    let lSum = 0, rSum = total;
    
    for( let i=0; i<nums.length; i++ ) {
        let num = nums[i];
        
        rSum -= num;
        
        if( lSum === rSum )
            return i
        
        lSum += num;
    }
    
    return -1;
};
/*
[1,7,3,6,5,6]

length < 2
1

total Sum;
lSum 0, rSum = total 
for i in nums
    num = nums[i]
    rSum -= num
    
    if( leSum === rSum )
        return i
    
    lSum += nums[i]


return -1
*/