/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [];
    let board = new Array(n).fill(".").map((a) => a = new Array(n).fill("."));
    let col = new Set();
    let posDig = new Set();
    let negDig = new Set();
    
    function solve(r) {
        if( r === n ) {
            let ans = [];
            for( let i = 0; i<board.length; i++ ) {
                ans.push( board[i].join("") );
            }
            res.push( [...ans] );
            return;
        }
        
        for( let c = 0; c < n;  c++ ) {
            if( col.has(c) || posDig.has(r+c) || negDig.has(r-c) )
                continue;
            
            col.add(c);
            posDig.add(r+c);
            negDig.add(r-c);
            board[r][c] = "Q";
            
            solve(r+1);
            
            col.delete(c);
            posDig.delete(r+c);
            negDig.delete(r-c);
            board[r][c] = ".";
        }
    }
    
    solve(0);
    return res;
};