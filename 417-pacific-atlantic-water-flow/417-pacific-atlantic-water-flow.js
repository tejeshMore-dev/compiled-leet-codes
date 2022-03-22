/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let rows = heights.length;
    let cols = heights[0].length;
    let result = [];
    let pMap = new Set(), aMap = new Set();
    
    function dfs(r, c, prev, map) {
        if( map.has(`${r}-${c}`) || r<0 || c<0 || r === rows || c === cols || heights[r][c] < prev )
            return 
        
        map.add(`${r}-${c}`);
        dfs( r+1, c, heights[r][c], map );
        dfs( r-1, c, heights[r][c], map );
        dfs( r, c+1, heights[r][c], map );
        dfs( r, c-1, heights[r][c], map );
    }
    
    for( let r=0; r<rows; r++ ) {
        dfs( r, 0, heights[r][0], pMap );
        dfs( r, cols-1, heights[r][cols-1], aMap );
    }
        
    for( let c=0; c<cols; c++ ) {
        dfs( 0, c, heights[0][c], pMap );
        dfs( rows-1, c, heights[rows-1][c], aMap );
    }
    
    for( let r=0; r<rows; r++ ) {
        for( let c=0; c<cols; c++ ) {
            if( pMap.has(`${r}-${c}`) && aMap.has(`${r}-${c}`) )
                result.push([r, c]);
        }
    }
    
    return result;
    
};