var numIslands = function(grid) {
    const ROWS = grid.length, COLS = grid[0].length;
    let result = 0;
    
    for( let r=0; r<ROWS; r++ ) {
        for( let c=0; c<COLS; c++ ) {
            if( grid[r][c] === "1" ) {
                result++;
                markNeighbourLand( r, c );
            }
    
        }
        
    }
    
    return result;
    
    function markNeighbourLand( r, c ) {
        if( r<0 || c<0 || r >= ROWS || c >= COLS || grid[r][c] === "0" )  
            return;
        
        grid[r][c] = "0";
        
        markNeighbourLand( r+1, c );
        markNeighbourLand( r-1, c );
        markNeighbourLand( r, c+1 );
        markNeighbourLand( r, c-1 );
    }
};