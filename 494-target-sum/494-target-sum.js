/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let map = new Map();
    return helper( 0, 0 );
    
    function helper( i, sum ) {        
        if( map.has(`${i}_${sum}`) ) {
            return map.get(`${i}_${sum}`)
        }
        
        if( i === nums.length )
            return sum === target ? 1 : 0            
        
        let res = helper( i+1, sum + nums[i] ) + 
                  helper( i+1, sum - nums[i] );
        
        map.set(`${i}_${sum}`, res);
        return res
    }
};