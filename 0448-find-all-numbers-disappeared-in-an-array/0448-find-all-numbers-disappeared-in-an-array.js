/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = [];
    if(nums.length < 2)
        return res;
    
    for( let num of nums ) {
        let i = Math.abs(num)-1;
        
        if( nums[i] > 0 )
            nums[i] *= -1;
    }
    
    for( let i=0 ; i<nums.length; i++ ) {
        if( nums[i] < 0)
            nums[i] *= -1;
        else
            res.push(i+1)
    }
        
    return res;
};
/*
n=1
res []

for num of nums
    let i = abs(num)-1
    if nums[i] < 0 ? continue : nums[i]*-1


for i in nums

if( nums[i] < 0)
    nums[i] *= -1

push i+1 in res 

*/