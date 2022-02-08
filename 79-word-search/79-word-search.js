/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */


// var exist = function(board, word) {
//     let rows = board.length, cols = board[0].length;
//     let cache = {};
    
//     for( let r = 0; r < rows; r++ ) {
//         for( let c = 0; c < cols; c++ ) {
//             if( board[r][c] === word.charAt(0) && backtrack( r, c, 0, new Set() ) ) {
//                 return true
//             }
//         }
//     }
//     return false
    
//     function backtrack( r, c, i, set ) {
//         if( cache[`${r}-${c}-${i}`] )
//             return cache[`${r}-${c}-${i}`]
        
//         if( i === word.length )
//             return true
        
//         if( r < 0 || c < 0 || r >= rows || c >= cols || set.has(`${r}-${c}`) || board[r][c] !== word.charAt(i)  )
//             return false
        
//         set.add(`${r}-${c}`);
//         let res = backtrack( r+1, c, i + 1, set ) || backtrack( r-1, c, i + 1, set ) || backtrack( r, c+1, i + 1, set ) || backtrack( r, c-1, i + 1, set )
//         set.delete(`${r}-${c}`);
        
//         cache[`${r}-${c}-${i}`] = res;
//         return res
//     }
// };


var exist = function(board, word) {
    if(board == null || word == null || board.length == 0) //edge case
        return false;
    
    
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[0].length; col++){
            if(helper(board, word, row, col, 0))  //recursive check
                return true;
        }
    }
    
    
    function helper(board, word, row, col, wordIndex){
        
        if(wordIndex == word.length) 
            return true;
        
        //out of bounds check
        if(row < 0 || row >= board.length || col < 0  || col >= board[0].length)
            return false;
        
        //letter check in the box (if the letter at the board is not equal to the letter of the given word return false)
        if(board[row][col] != word[wordIndex])
            return false;
        
        //choose
        let temp = board[row][col];
        board[row][col] = '*';          //marking the visited box
        
        //explore
        let bool = helper(board, word, row-1, col, wordIndex+1) ||
            helper(board, word, row+1, col, wordIndex+1) ||
            helper(board, word, row, col-1, wordIndex+1) ||
            helper(board, word, row, col+1, wordIndex+1);
    
        //unchoose
        board[row][col] = temp;        //setting back the value from '*' to the letter
        
        return bool;
    }
    
    
    return false;
};