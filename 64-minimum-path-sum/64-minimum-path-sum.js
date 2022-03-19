/**
 * @param {number[][]} grid
 * @return {number}
 */

// /* Top down Approach
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
// */