/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {}, ans = [];
    
    for( let num of nums1 ) {
        if( !map[num] )
            map[num] = { l1: 1, l2: 0 }
        else 
            map[num].l1 = 1 + map[num].l1;
    }
    
    
    for( let num of nums2 ) {
        if( !map[num] )
            map[num] = { l1: 0, l2: 1 }
        else 
            map[num].l2 = 1 + map[num].l2;
    }
    
    for( let num in map ) {
        let fr = Math.min(map[num].l1, map[num].l2);
        while( fr-- ){
            ans.push(num)
        }
    }
    return ans;
};