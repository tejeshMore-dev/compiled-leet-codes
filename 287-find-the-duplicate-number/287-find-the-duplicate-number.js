/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let res;
    
    for( let i=0; i<nums.length; i++ ) {
        let current = Math.abs(nums[i]);
        let index = current-1;
        
        let val = nums[index];
        
        if( val < 0 ) {
            res = current
            break;            
        }
        else
            nums[index] = -1 * nums[index]; 
    }
    
    for( let i=0; i<nums.length; i++ ) {
        nums[i] = Math.abs(nums[i])
    }
    
    return res;
};

/*
[-1,-3,-4,-2,2]

cur = abs(nums[i])
cur-1 
in = 1

val = nums[in]

if -ve 
return  cur

else
nums[in] = -ve

*/