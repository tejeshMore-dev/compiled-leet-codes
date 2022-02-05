/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if( x === 0 ) return 0
    
    let lp = 1, rp = x;
    
    while ( lp < rp ) {
        let mid = Math.round(( rp + lp )/2);
        if( mid * mid > x ) {
            rp = mid - 1
        } else {
            lp = mid;
        }
    }
    
    return lp
};