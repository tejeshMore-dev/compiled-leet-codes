/**
 * @param {number[][]} grid
 * @return {number}
 */

/* Top down Approach
var minPathSum = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let cache = new Array(rows).fill(-1).map( a => new Array(cols).fill(-1) )
    return helper( 0, 0 );
    
    function helper( r, c ) {
        if( r ===  rows || c === cols )
            return Number.MAX_VALUE;
        else   if( r === rows-1 && c === cols-1 )
            return grid[r][c];
        
        if( cache[r][c] > -1 )
            return cache[r][c];
        
        return cache[r][c] = grid[r][c] + Math.min( helper(r+1, c), helper(r, c+1) )
    }
};
*/

// /* Bottom Up Approach
var minPathSum = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    
    let dp = new Array(rows).fill(1).map( a => new Array(cols).fill(1) );
    
    for( let r=0; r < rows; r++ ) {
        for( let c=0; c < cols; c++ ) {
            if( r === 0 && c === 0 )
                dp[r][c] = grid[r][c];
            else if( r === 0 )
                dp[r][c] = grid[r][c] + dp[r][c-1];
            else if( c === 0 )
                dp[r][c] = grid[r][c] + dp[r-1][c];
            else
                dp[r][c] = Math.min(dp[r-1][c], dp[r][c-1]) + grid[r][c];
        }
    }
    
    return dp[rows-1][cols-1];
};
// */