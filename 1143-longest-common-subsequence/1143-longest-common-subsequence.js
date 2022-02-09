/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let map = new Map();
    return helper( text1.length-1, text2.length-1 )
    
    function helper( n, m ) {
        if( map.has(`${n}-${m}`) )
            return map.get(`${n}-${m}`)
        
        if( n < 0 || m < 0 )
            return 0;
        
        let res;
        
        if( text1.charAt(n) === text2.charAt(m) ){
            res = 1 + helper( n-1, m-1 );            
        } else {
            res = Math.max( helper( n, m-1 ), helper( n-1, m ) );
        }
        
        map.set(`${n}-${m}`, res);
        return res;
    }
};