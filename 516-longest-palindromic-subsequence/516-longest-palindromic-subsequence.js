/**
 * @param {string} s
 * @return {number}
 */

var longestPalindromeSubseq = function(s) {
  var sols = new Array(s.length).fill(0).map(a => new Array(s.length).fill(-1));
    return helper( s, 0, s.length-1, sols );
};

function helper( s, l, r, sols ) {
    if( l === r )
        return 1
    
    if( l > r )
        return 0
    
    if (sols[l][r] !== -1) return sols[l][r];
    
    if( s.charAt(l) === s.charAt(r) ) {
       return sols[l][r] = 2 + helper( s, l+1, r-1, sols );
    } else {
        return sols[l][r]  = Math.max( helper(s, l, r-1, sols), helper(s, l+1, r, sols) );
    }
}