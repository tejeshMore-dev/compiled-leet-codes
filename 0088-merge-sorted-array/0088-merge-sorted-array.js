/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if( !n )
        return;
    
    if( !m ) {
        for( let i=0; i<nums2.length; i++ ) {
            nums1[i] = nums2[i];
        }
        return;
    }
    
    let ri = m+n-1, i1 = m-1, i2 = n-1;
    
    while( i2 >= 0 ) {
        if( i1 < 0 || nums2[i2] >= nums1[i1] ) {
            nums1[ri] = nums2[i2];
            i2--;            
        } else {
            nums1[ri] = nums1[i1];
            i1--;            
        }
        ri--;
    }
};