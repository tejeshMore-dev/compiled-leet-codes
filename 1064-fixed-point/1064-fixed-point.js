/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
    let lp = 0, rp = arr.length-1, ans = Number.MAX_VALUE;
    
    while( lp <= rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        
        if( arr[mid] === mid ) {
            ans = Math.min(ans, mid)
            rp = mid-1;
        }
        
        if( arr[mid] < mid )
            lp = mid+1
        else
            rp = mid-1;
    }
    
    return ans === Number.MAX_VALUE ? -1 : ans;
};