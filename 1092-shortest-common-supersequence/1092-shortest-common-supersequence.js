/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    const lcs = findLCS( str1, str2 );
    
    let p1 = 0, p2 = 0;
    let sb = [];
    
    for( let char of lcs ) {
        while( str1[p1] !== char ) {
            sb.push( str1[p1++] );
        }
        
        while( str2[p2] !== char ) {
            sb.push( str2[p2++] );
        }
        
        sb.push(char);
        p1++;
        p2++;
    }
    
    while( p1 !== str1.length ) {
        sb.push( str1[p1++] );
    }
    while( p2 !== str2.length ) {
        sb.push( str2[p2++] );
    }
    
    return sb.join("");
};
function findLCS(str1, str2) {
    let dp = new Array( str1.length+1 ).fill([]).map( a => new Array(str2.length+1).fill([]) );
    
    for( let i=1; i <= str1.length; i++ ) {
        for( let j=1; j <= str2.length; j++ ) {
            if( str1[i-1] === str2[j-1] ) {
                dp[i][j] = [ ...dp[i-1][j-1], str1[i-1]  ];
            } else {
                dp[i][j] = dp[i-1][j].length > dp[i][j-1].length ? dp[i-1][j] : dp[i][j-1];
            }
        }
    }
    return dp[str1.length][str2.length];
}
