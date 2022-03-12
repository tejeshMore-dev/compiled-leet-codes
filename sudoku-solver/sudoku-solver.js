/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let row = {};
    let col = {};
    let subGrid = {};
    prefill();
    solve();
    
    function prefill() {
        for( let r=0; r<9; r++ ) {
            for( let c=0; c<9; c++ ) {
                let val = board[r][c];
                add(row, r, val);
                add(col, c, val);
                add(subGrid, getStr(r, c), val);
            }
        }
    }
    
    
    function solve() {
        for( let r=0; r<9; r++ ) {
            for( let c=0; c<9; c++ ) {
                if( board[r][c] === "." ) {
                    for( let i=1; i<=9; i++ ) {
                        let val = `${i}`
                        if( valid( r, c, val ) ) {
                            add(row, r, val);
                            add(col, c, val);
                            add(subGrid, getStr(r, c), val);
                            board[r][c] = val;
                            
                            if( solve() ) {
                                return true
                            } else {
                                board[r][c] = ".";
                                del(row, r, val);
                                del(col, c, val);
                                del(subGrid, getStr(r, c), val);
                            }
                        } 
                    }
                    return false;
                }
            }
        }
        return true;
    }
    
    function valid(r, c, val) {
        return !( has(row, r, val) || has(col, c, val) || has(subGrid, getStr(r, c), val))
        
    }    
};

function getStr( r, c ) {
    return `${Math.floor(r/3)}-${Math.floor(c/3)}`;
}

function add( map, key, val ) {
    if( !map[key] ) {
        map[key] = new Set();
    }
     map[key].add(val);
}

function has( map, key, val ) {
    if( !map[key] ) {
        return false
    }
    
    return map[key].has(val);
}

function del( map, key, val ) {
    map[key].delete(val);
}