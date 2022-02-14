/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let result = [];
    
    for( let i = 0; i < nums.length; i++ ) {
        let val = Math.abs(nums[i]);
        
        if( nums[val-1] < 0 ) {
            result.push( val )
        } else {
            nums[val-1] = -nums[val-1];    
        }
    }
    
    for( let i = 0; i < nums.length; i++ ) {
        if( nums[i] > 0 ) {
            result.push( i+1 )
            return result;
        }      
    }
};
/*


1 2 3 3 5
 3 4
 
1 1 

2 2
 





















*/