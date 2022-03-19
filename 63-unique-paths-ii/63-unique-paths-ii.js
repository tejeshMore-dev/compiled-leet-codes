/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// /* Top Down Approach
var uniquePathsWithObstacles = function(obstacleGrid) {
    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;
    let cache = new Array(rows).fill(-1).map(a => new Array(cols).fill(-1));
    
    const MAX = Number.MAX_VALUE;
    return findPath( 0, 0 );
    
    function findPath( r, c ) {
        if( r === rows || c === cols || obstacleGrid[r][c] === 1 )
            return 0;
        else if( r === rows-1 && c === cols-1 )
            return 1
        
        if( cache[r][c] > -1 )
            return cache[r][c];
        
        let opt1 = findPath(r+1, c);
        let opt2 = findPath(r, c+1);
        
        return cache[r][c] = opt1+opt2;
    }
};
// */

/* Top Down Approach
var uniquePathsWithObstacles = function(obstacleGrid) { 
}
*/