/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let lp=1, rp=n;
    let res;
    
    while( 1 ) {
        let mid = lp + Math.floor((rp-lp)/2);
        let state = guess(mid);
        
        if( state === 1 ) 
            lp = mid+1
        else if( state === -1 )
            rp = mid-1
        else
            return res = mid
    }
    
    return res;
};