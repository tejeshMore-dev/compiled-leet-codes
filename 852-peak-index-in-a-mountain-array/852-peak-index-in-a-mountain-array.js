/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let lp = 0;
    let rp = arr.length-1;
    
    while( lp < rp ) {
        let pivot = Math.floor(lp+(rp-lp)/2);
        
        if( arr[pivot+1] > arr[pivot] )
            lp = pivot + 1;
        else
            rp = pivot;
        
    }
    
    return lp;
};