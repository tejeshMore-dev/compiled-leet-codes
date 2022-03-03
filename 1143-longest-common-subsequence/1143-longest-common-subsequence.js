/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    var sols = new Array(text1.length).fill(0).map(a => new Array(text2.length).fill(-1));
    return helper( text1.length-1, text2.length-1 );
    
    function helper( i, j ) {
        if( i < 0 || j < 0 )
            return 0;
        
        if( sols[i][j] >-1 )
            return sols[i][j];
        
        let ans;
        if( text1.charAt(i) === text2.charAt(j) )
            ans = 1 + helper( i-1, j-1 );
        else 
            ans = Math.max( helper(i-1, j), helper(i, j-1) );
        
        sols[i][j] = ans;
        return ans;
    }
    
};