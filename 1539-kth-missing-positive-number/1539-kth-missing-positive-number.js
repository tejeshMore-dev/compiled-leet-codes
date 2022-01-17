/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let pointer, diff;
    
    for( let i = 0; i < arr.length; i++ ) {
        if( i=== 0 && arr[0] > 1 ) {
            diff = arr[i] - 1;
            pointer = 0;
        } else {
            diff = arr[i] - arr[i-1] -1
            pointer = arr[i-1];
        }
        
        while( diff && k ) {
            pointer++;
            diff--;
            k--;
        }
        
        if( !k )
            return pointer
        
    }
    if( k ) {
        pointer = arr[arr.length-1];
        while( k ) {
            pointer++
            k--;
        }
    }
    
    return pointer;
};