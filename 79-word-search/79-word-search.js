/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */


var exist = function(board, word) {
    let rows = board.length, cols = board[0].length;
    
    for( let r = 0; r < rows; r++ ) {
        for( let c = 0 ; c < cols; c++ ) {
            if( dfs(r, c, 0) )
                return true
        }
    }
    
    return false;
    
    function dfs( r, c, i ) {
        if( i === word.length )
            return true;
        
        if( r < 0 || c < 0 || r >= rows || c >= cols || word[i] !== board[r][c] )
            return false;
        
        let temp = board[r][c];
        board[r][c] = "*"
        
        let res = dfs( r+1, c, i+1 ) || 
            dfs( r-1, c, i+1 ) || 
            dfs( r, c-1, i+1 ) || 
            dfs( r, c+1, i+1 );

        board[r][c] = temp;
        return res;        
    }
    
};



