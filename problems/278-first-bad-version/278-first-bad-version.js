/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lp = 1, hp = n;
        while( lp < hp ) {
            let mid = Math.floor( lp + (hp -lp)/2 );
            
            if( isBadVersion(mid) )
                hp = mid;
             else
                 lp = mid + 1;
                 
        }
        return lp
    };
};