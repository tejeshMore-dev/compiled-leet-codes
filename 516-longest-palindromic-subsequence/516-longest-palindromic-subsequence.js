/**
 * @param {string} s
 * @return {number}
 */

var longestPalindromeSubseq = function(s) {
  var sols = new Array(s.length).fill(0).map(a => new Array(s.length).fill(-1));
    return helper( s, 0, s.length-1, sols );
};

function helper( s, l, r, sols ) {
    if( l === s.length || r < 0 )
        return 0
    
    if (sols[l][r] !== -1) return sols[l][r];
    
    if( s.charAt(l) === s.charAt(r) ) {
       return sols[l][r] = 1 + helper( s, l+1, r-1, sols );
    } else {
        return sols[l][r]  = Math.max( helper(s, l, r-1, sols), helper(s, l+1, r, sols) );
    }
}

/*


5  bbbab
5  babbb

len-1-i
4 3

0 1
b b b b 



cbbd
dbbc
bb 


























*/