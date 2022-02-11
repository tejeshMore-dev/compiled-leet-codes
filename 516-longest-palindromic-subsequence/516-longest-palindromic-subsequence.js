/**
 * @param {string} s
 * @return {number}
 */

var longestPalindromeSubseq = function(s) {
  var sols = new Array(s.length).fill(0).map(a => new Array(s.length).fill(-1));
    return helper( s, 0, s.length-1, sols );
};

function helper( s, l, r, sols ) {
    if (sols[l][r] !== -1) return sols[l][r];


    if( l === r )
        return 1
    
    if( l > r )
        return 0
    

    if( s.charAt(l) === s.charAt(r) ) {
       return sols[l][r] = 2 + helper( s, l+1, r-1, sols );
    } else {
        return sols[l][r]  = Math.max( helper(s, l, r-1, sols), helper(s, l+1, r, sols), helper(s, l+1, r-1, sols) );
    }
}

// var longestPalindromeSubseq = function(s) {
//   var sols = new Array(s.length).fill(0).map(a => new Array(s.length).fill(-1));
//     return recursion(s, 0, s.length - 1, sols); 
// }
// function recursion(s, i, j, sols) {
//     if (sols[i][j] !== -1) return sols[i][j];
//     if (i === j) return 1;
//     if (i  > j) return 0;
//     if (s[i] === s[j]) {
//         var val = 2 + recursion(s, i + 1, j - 1, sols);
//         sols[i][j] = val;
//         return sols[i][j];
//     } else {
//         var max = Math.max(recursion(s, i, j - 1, sols),recursion(s, i+1, j, sols),recursion(s, i+1, j - 1, sols));
//          sols[i][j] = max;
//         return sols[i][j];
//     }
// }
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