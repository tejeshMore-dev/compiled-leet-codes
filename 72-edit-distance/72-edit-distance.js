/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let l1 = word1.length;
    let l2 = word2.length;
    
    let dp = new Array( l1+1 ).fill(0).map( a => new Array( l2+1 ).fill(0) );
    
    for( let i=0; i <= l1; i++ ) {
        for( let j=0; j <= l2; j++ ) {
            if( i === 0 )
                dp[i][j] = j;
            else if( j === 0 )
                dp[i][j] = i;
            else if( word1[i-1] === word2[j-1] )
                dp[i][j] = dp[i-1][j-1];
            else
                dp[i][j] = Math.min( dp[i-1][j], dp[i][j-1], dp[i-1][j-1] ) + 1;
        }
    }
    return dp[l1][l2];
};