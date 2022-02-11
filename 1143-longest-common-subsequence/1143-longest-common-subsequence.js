/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  var sols = new Array(text1.length).fill(0).map(a => new Array(text2.length).fill(-1));
    return helper( text1, text2, text1.length-1, text2.length-1, sols )
};

function helper( text1, text2, n, m, sols ) {
    if( n < 0 || m < 0 )
        return 0;

    if (sols[n][m] !== -1) return sols[n][m];


    if( text1.charAt(n) === text2.charAt(m) ){
        return sols[n][m] = 1 + helper( text1, text2, n-1, m-1, sols );            
    } else {
        return sols[n][m] = Math.max( helper( text1, text2, n, m-1, sols ), 
                                             helper( text1, text2, n-1, m, sols ) );
    }
}