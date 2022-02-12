/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ans = [], map = {};
    
    for( let num of nums1 ) {
        if( !map[num] )
            map[num] = { l1: true, l2: false };
        else 
            map[num].l1 = true;
    }
    
    for( let num of nums2 ) {
        if( !map[num] )
            map[num] = { l1: false, l2: true };
        else 
            map[num].l2 = true;
    }
    
    for( let num in map ) {
        if( map[num].l1 && map[num].l2 )
            ans.push(num)
    }
    
    return ans
};