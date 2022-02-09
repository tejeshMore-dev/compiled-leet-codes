/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let map = new Map();
    return helper( text1, text2, text1.length-1, text2.length-1, map )
};

function helper( text1, text2, n, m, map ) {
    if( n < 0 || m < 0 )
        return 0;

    if( map.has(`${n}-${m}`) )
        return map.get(`${n}-${m}`)

    let res;

    if( text1.charAt(n) === text2.charAt(m) ){
        res = 1 + helper( text1, text2, n-1, m-1, map );            
    } else {
        res = Math.max( helper( text1, text2, n, m-1, map ), helper( text1, text2, n-1, m, map ) );
    }

    map.set(`${n}-${m}`, res);
    return res;
}