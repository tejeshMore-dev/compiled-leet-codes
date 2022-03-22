/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const ROWS = matrix.length, COLS = matrix[0].length;
    let dp = new Array(ROWS).fill(-1).map(a => new Array(COLS).fill(-1));
    let ans = -1;
    
    for( let r=0; r<ROWS; r++ ) {
        for( let c=0; c<COLS; c++ ) {
            let res = dfs(r, c, -1);
            ans = Math.max(ans, res);
        }
    }
    
    return ans;
    
    
    function dfs(r, c, prev) {
        if( r<0 || c<0 || r === ROWS || c === COLS || matrix[r][c] <= prev )
            return 0
        
        if( dp[r][c] > -1 )
            return dp[r][c]
                
        let d1 = dfs(r+1, c, matrix[r][c]);
        let d2 = dfs(r-1, c, matrix[r][c]);
        let d3 = dfs(r, c+1, matrix[r][c]);
        let d4 = dfs(r, c-1, matrix[r][c]);
        
        return dp[r][c] = Math.max(1, 1+d1, 1+d2, 1+d3, 1+d4);
    }
    
};