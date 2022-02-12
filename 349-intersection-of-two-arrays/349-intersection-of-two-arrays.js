/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ans = [];
    
    let set = new Set(nums1);
    
    for( let num of nums2 ) {
        if( set.has(num) ) {
            ans.push(num);
            set.delete(num);
        }
    }

    return ans
};