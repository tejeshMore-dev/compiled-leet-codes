/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let cache = {};
    return helper( s, 0, s.length-1, cache );
};

function helper( s, l, r, cache ) {
   if( cache[`${l}-${r}`] )
        return cache[`${l}-${r}`];

    if( l === r )
        return 1
    
    if( l > r )
        return 0
    

    if( s.charAt(l) === s.charAt(r) ) {
        return cache[`${l}-${r}`] = 2 + helper( s, l+1, r-1, cache );
    } else {
        cache[`${l}-${r}`] = Math.max( helper(s, l, r-1, cache), helper(s, l+1, r, cache), helper(s, l+1, r-1, cache) )
        return cache[`${l}-${r}`];
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