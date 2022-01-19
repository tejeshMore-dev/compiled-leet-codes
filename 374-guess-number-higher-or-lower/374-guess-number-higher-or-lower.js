/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let lp = 1, hp = n;
    
    while ( lp < hp ) {
        let mid = Math.floor(lp + (hp-lp)/2);
        
        if( guess(mid) === 1 ) {
            lp = mid + 1;
        } else {
            hp = mid;
        }
    }
    
    return lp
};