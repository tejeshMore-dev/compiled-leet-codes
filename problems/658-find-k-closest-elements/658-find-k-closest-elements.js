/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let lp = 0, rp = arr.length-1, ans = [];
    
    while( rp - lp + 1 > k ) {
        let left = Math.abs( arr[lp] - x );
        let right = Math.abs( arr[rp] - x )
        
        if( left <= right )
            rp--;
        else
            lp++;
    }
    
    for( let i = 0; i < k; i++ ) {
        ans.push(arr[lp+i]);
    }
    
    return ans;
};