/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    let map = {}, ans = [];
    
    for( let i=0; i < nums2.length; i++ ) {
        map[nums2[i]] = i;
    }
    
    for( let i=0; i < nums1.length; i++ ) {
        ans[i] = map[nums1[i]];
    }
    
    return ans;
};