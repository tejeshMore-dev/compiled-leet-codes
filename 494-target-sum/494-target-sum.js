/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var findTargetSumWays = function(nums, target) {
    let cache = new Map();
    return helper( 0, 0 );
    
    function helper( i, sum ) {
        if( i === nums.length ) {
            return sum === target ? 1 : 0;
        }
        
        if( cache.has(`${i}-${sum}`) )
            return cache.get(`${i}-${sum}`);
        
        let opt1 = helper( i+1, sum + nums[i] );
        let opt2 = helper( i+1, sum - nums[i] );
        
        cache.set(`${i}-${sum}`, opt1 + opt2);
        return opt1 + opt2;
    }
};