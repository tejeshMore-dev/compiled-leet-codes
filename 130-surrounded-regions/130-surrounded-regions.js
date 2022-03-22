/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let rows = board.length;
    let cols = board[0].length;
    
    let visited = new Set();
    for( let r=0; r<rows; r++ ) {
        dfs( r, 0 );
        dfs( r, cols-1 );
    }
    
    for( let c=0; c<cols; c++ ) {
        dfs( 0, c );
        dfs( rows-1, c );
    }
    
    function dfs( r, c ) {
        if( visited.has(`${r}-${c}`) || r < 0 || c < 0 || r === rows || c === cols || board[r][c] !== "O" )
            return
        
        visited.add(`${r}-${c}`);
        board[r][c] = "*";
        dfs( r+1, c );
        dfs( r-1, c );
        dfs( r, c+1 );
        dfs( r, c-1 );
    }
    
    for( let r=0; r<rows; r++ ) {
        for( let c=0; c<cols; c++ ) {
            if( board[r][c] === "O" )
                board[r][c] = "X"
        }
    }
    
     for( let r=0; r<rows; r++ ) {
        for( let c=0; c<cols; c++ ) {
            if( board[r][c] === "*" )
                board[r][c] = "O"
        }
    }
};