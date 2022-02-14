/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let lp = 0;
    let rp = arr.length-1;
    
    while( lp <= rp ) {
        let pivot = lp + Math.floor((rp-lp)/2);
        
        if( arr[pivot] < arr[pivot + 1] )
            lp = pivot + 1;
        else
            rp = pivot - 1;
        
    }
    
    return lp;
};