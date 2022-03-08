/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    
    for( let i in nums ) {
        let num = nums[i];
        
        if( map.has(num) ) {
            for( let ni of map.get(num) ) {
                if( Math.abs( ni - i ) <= k ) {
                    // console.log(num, ni, i, k)
                    return true
                }
            }
            
            map.get( num ).push( i );
        }
        
        map.set( num, [ i ] );
    }
    return false;
};