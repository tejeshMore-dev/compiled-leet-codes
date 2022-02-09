/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let cache = {}
    return helper( text1, text2, text1.length-1, text2.length-1, cache )
};

function helper( text1, text2, n, m, cache ) {
    if( n < 0 || m < 0 )
        return 0;

    if( cache[`${n}-${m}`] )
        return cache[`${n}-${m}`]


    if( text1.charAt(n) === text2.charAt(m) ){
        return cache[`${n}-${m}`] = 1 + helper( text1, text2, n-1, m-1, cache );            
    } else {
        return cache[`${n}-${m}`] = Math.max( helper( text1, text2, n, m-1, cache ), helper( text1, text2, n-1, m, cache ) );
    }
    
}