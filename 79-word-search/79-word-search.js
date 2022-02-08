/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length, cols = board[0].length;
    
    for( let r = 0; r < rows; r++ ) {
        for( let c = 0; c < cols; c++ ) {
            if( board[r][c] === word.charAt(0) && backtrack( r, c, 0, new Set() ) ) {
                return true
            }
        }
    }
    return false
    
    function backtrack( r, c, i, set ) {
        if( i === word.length )
            return true
        
        if( r < 0 || c < 0 || r >= rows || c >= cols || set.has(`${r}-${c}`) || board[r][c] !== word.charAt(i)  )
            return false
        
        set.add(`${r}-${c}`);
        let res = backtrack( r+1, c, i + 1, set ) || backtrack( r-1, c, i + 1, set ) || backtrack( r, c+1, i + 1, set ) || backtrack( r, c-1, i + 1, set )
        set.delete(`${r}-${c}`);
        return res
    }
};