/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = { };
    let col = {};
    let subGrid = {};
    
    for( let r=0; r<9; r++ ) {
        for( let c=0; c<9; c++ ) {
            if( board[r][c] !== "." ) {
                let val = board[r][c];
                if( has(row, r, val) || has(col, c, val) || has(subGrid, `${Math.floor(r/3)}-${Math.floor(c/3)}`, val) )
                    return false;
                
                add(row, r, val);
                add(col, c, val);
                add(subGrid, `${Math.floor(r/3)}-${Math.floor(c/3)}`, val);
            }
            
        }
    }
    
    return true;
};

function add( map, key, val ) {
    if( !map[key] ) {
        map[key] = new Set();
        map[key].add(val);
    } else {
        map[key].add(val);
    }
}


function has( map, key, val ) {
    if( !map[key] )
        return false;
    
    return map[key].has(val);
}