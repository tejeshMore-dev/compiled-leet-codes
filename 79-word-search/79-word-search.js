/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    for( let r=0; r<rows; r++ ) { 
        for( let c=0; c<cols; c++ ) {
            if( findWord(r, c, 0) )
                return true
        }
    }
    
    return false;
    
    function findWord(r, c, i) {
        if( i === word.length)
            return true
        
        if( r<0 || r >=rows || c<0 || c>=cols || board[r][c] !== word[i])
            return false;
        
        let temp = board[r][c];
        board[r][c] = "*";
        
        let res = findWord(r+1, c, i+1) ||
        findWord(r-1, c, i+1) ||
        findWord(r, c+1, i+1) ||
        findWord(r, c-1, i+1)
        
        board[r][c] = temp;
        return res
    
        /*
        let res = false;
        for( let direction of directions ) {
            let newR = direction[0]+r, newC = direction[1]+c;
            if( newR<0 || newR >=rows || newC<0 || newC>=cols || used.has(`${newR}-${newC}`) || board[newR][newC] !== word[i])
                continue;
            
            used.add(`${newR}-${newC}`);
            res = res || findWord(newR, newC, i+1, used )
            used.delete(`${newR}-${newC}`);
        }
        
        return res
        */
    }
};
/*

row
col

for row
for col
    board[row][col] === word[wi]
        add in used
        recursion (wi++, used)



states
wi

used set
row-col

[1, 0] [-1 0] [0 1] [0 -1]
*/