/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let cache = {};
    return helper( 0, 0 );
    
    function helper( i, sum ) {
        // if( cache[`${i}_${sum}`] )
        //     return cache[`${i}_${sum}`]
        
        if( i === nums.length )
            return sum === target ? 1 : 0
        
        let num = nums[i];
        let opt1 = helper( i+1, sum + num );
        let opt2 = helper( i+1, sum - num );
        
        return opt1+opt2
        cache[`${i}_${sum}`] = opt1 + opt2;
        
//         return cache[`${i}_${sum}`]
        
    }
};