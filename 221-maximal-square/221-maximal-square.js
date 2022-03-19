/**
 * @param {character[][]} matrix
 * @return {number}
 */
// /* Top Down Approach
var maximalSquare = function(matrix) {
};
// */


// /* Bottom up Approach
var maximalSquare = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let dp = new Array(rows+1).fill(0).map( a => new Array(cols+1).fill(0) );
    let ans = 0;
    
    for( let r = 1; r <= rows; r++ ) {
        for( let c = 1; c <= cols; c++ ) {
            if( matrix[r-1][c-1] === "1" ) {
                dp[r][c] = 1 + Math.min( dp[r][c-1], dp[r-1][c], dp[r-1][c-1] );
                ans = Math.max( ans, dp[r][c] )
            }
        }
    }
    
    return ans * ans;
};
// */