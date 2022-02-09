/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    return helper( text1.length-1, text2.length-1, new Map() )
    
    function helper( n, m, map ) {
        if( map.has(`${n}-${m}`) )
            return map.get(`${n}-${m}`)
        
        if( n < 0 || m < 0 )
            return 0;
        
        let res;
        
        if( text1.charAt(n) === text2.charAt(m) ){
            res = 1 + helper( n-1, m-1, map );            
        } else {
            res = Math.max( helper( n, m-1,map ), helper( n-1, m, map ) );
        }
        
        map.set(`${n}-${m}`, res);
        return res;
    }
};