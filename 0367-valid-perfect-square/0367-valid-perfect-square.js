/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if( num < 2 )
        return true;
    
    let lp=1, rp=Math.ceil(num/2);
    
    while( lp <= rp ) {
        let mid = lp+Math.floor((rp-lp)/2);
        let sqrt = mid*mid;
        
        if( num < sqrt )
            rp = mid-1;
        else if( num > sqrt  )
            lp = mid+1;
        else
            return true                
    }

    return false;
};