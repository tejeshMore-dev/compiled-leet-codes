/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map = {}, ans = 0;
    
    for( let num of nums ) {
        if( !map[num] )
            map[num] = 0;
        
        map[num] = map[num] + 1;
    }
    
    for( let key in map ) {
        let count = map[key];
        if( count > 1 ) {
            ans += Math.floor(count * (count - 1) /2)
        }
    }
    
    return ans;
};