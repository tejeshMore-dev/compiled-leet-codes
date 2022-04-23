/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if( nums.length === 0 )
        return 0
    
    let set = new Set(), ans = 1;
    for( let num of nums ) {
        set.add(num);
    }
    
    for( let num of nums ) {
        if( !set.has(num-1) && set.has(num+1) ) {
            let count = 1, val = num;
            while( set.has(++val) ) {
                count++;
            }
            
            ans = Math.max( ans, count );
        }
    }
    
    return ans;
};