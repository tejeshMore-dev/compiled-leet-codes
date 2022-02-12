/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ans = [], map = {};
    
    for( let num of nums1 ) {
        map[num] = 1;
    }
    
    for( let num of nums2 ) {
        if( map[num] ) {
            ans.push(num)
            map[num] = 0;            
        }
    }

    return ans
};