/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {}, ans = [];
    
    for( let num of nums1 ) {
        if( !map[num] )
            map[num] = 1
        else 
            map[num] = 1 + map[num];
    }
    
    
    for( let num of nums2 ) {
        if( map[num] ){
            ans.push(num);
            map[num] = map[num] -1;
        }
    }
    return ans;
};