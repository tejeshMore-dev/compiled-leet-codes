/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// /* Top Down Approach
var findTargetSumWays = function(nums, target) {
    let cache = new Map();
    return helper( 0, 0 );
    
    function helper( i, sum ) {
        if( i === nums.length )
            return sum === target ? 1 : 0;
        
        let key = `${i}-${sum}`;
        if( cache.has(key) )
            return cache.get(key);
                
        let opt1 = helper( i+1, sum + nums[i] );
        let opt2 = helper( i+1, sum - nums[i] );
        
        cache.set(key, opt1+opt2);
        return opt1+opt2;
    }
};
// */

/* Bottom up Approach
var findTargetSumWays = function(nums, target) {
    let sols = new Map();
    sols.set(`${nums.length}-${target}`, 1);
    
    for(  )
}
*/