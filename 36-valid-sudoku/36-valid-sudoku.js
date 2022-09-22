/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = {};
    let col = {};
    let subGrid = {};
    
    for( let r=0; r<9; r++ ) {
        for( let c=0; c<9; c++ ) {
            let val = board[r][c];
            if(val !== "." ){
                let subGridkey = `${Math.floor(r/3)}-${Math.floor(c/3)}`;
                if( has(row, r, val) || has(col, c, val) || has(subGrid, subGridkey, val) ) {
                    return false;
                }

                add(row, r, val);
                add(col, c, val);
                add(subGrid, subGridkey, val); 
            }
        }
    }
    
    return true;
};

const add = function( map, key, val ) {
    if( !map[key] )
        map[key] = new Set();
    
    map[key].add(val);
}

const has = function( map, key, val ){
    if(!map.hasOwnProperty(key))
        return false;
    
    return map[key].has(val);   
}