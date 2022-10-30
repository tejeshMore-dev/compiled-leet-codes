/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let ans = 1;
    let lp = 1, rp = n;
    
    while( lp <= rp ) {
        let mid = lp + Math.floor((rp-lp)/2);
        let coinRequired = ((mid * (mid+1))/2);
        
        if( n >= coinRequired ) {
            lp = mid+1;
            ans = Math.max(ans, mid)
        } else
            rp = mid-1
    }
    
    return ans;
};
/*
(n * (n+1))/2
*/