/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */


var exist = function(board, word) {
    let rows = board.length, cols = board[0].length;
    let cache = {};
    
    for( let r = 0; r < rows; r++ ) {
        for( let c = 0; c < cols; c++ ) {
            if( backtrack( r, c, 0 ) ) {
                return true
            }
        }
    }
    return false
    
    function backtrack( r, c, i ) {
        // if( cache[`${r}-${c}-${i}`] )
        //     return cache[`${r}-${c}-${i}`]
        
        if( i === word.length )
            return true
        
        if( r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word.charAt(i)  )
            return false
        
        let temp = board[r][c];
        board[r][c] = '*';          //marking the visited box
        
        let res = backtrack( r-1, c, i + 1 ) || backtrack( r+1, c, i + 1 ) || backtrack( r, c-1, i + 1 ) || backtrack( r, c+1, i + 1 )
        board[r][c] = temp;        //setting back the value from '*' to the letter
        
        cache[`${r}-${c}-${i}`]  = res;
        return res
    }
};


