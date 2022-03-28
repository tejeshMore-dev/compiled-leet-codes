/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var MAX = Number.MAX_VALUE;

var findMedianSortedArrays = function(nums1, nums2) {
    if( nums1.length === 0 && nums2.length === 1 )
        return nums2[0];
    
    if( nums1.length > nums2.length )
        return findMedianSortedArrays( nums2, nums1 );
    
    let total = nums1.length + nums2.length;
    let half = Math.floor( total/2 );
    let result;
    let lp = 0 , rp = nums1.length-1;
    
    while( 1 ) {
        let mid1 = Math.floor( lp + (rp-lp)/2 );
        let mid2 = half - mid1 - 2 ;
        
        let num1L = nums1[mid1] || -MAX;
        let num1R = nums1[mid1+1] || MAX; 
        
        let num2L = nums2[mid2] ||-MAX ;
        let num2R = nums2[mid2+1] || MAX;
        
        if( num1L <= num2R && num2L <= num1R ) {
            if( total%2 )
                return result = Math.min( num1R, num2R );
            else
                return result = (Math.min( num1R, num2R ) + Math.max( num1L, num2L )) /2;
        } else if( num1L > num2R ) {
            rp = mid1-1;
        } else {
            lp = mid1 +1;            
        }
    }
    
    return result;
};