/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let ans = 0;
    
    let col = new Set();
    let posDig = new Set();
    let negDig = new Set();
    
    function backtrack( r ) {
        if( r === n ) {
            ans++;
            return;
        }
        
        for( let c=0; c<n; c++ ) {
            if( col.has(c) || posDig.has(r+c) || negDig.has(r-c) )
                continue;
            
            col.add(c);
            posDig.add(r+c);
            negDig.add(r-c);
            
            backtrack(r+1);
            
            col.delete(c);
            posDig.delete(r+c);
            negDig.delete(r-c);
        }
    }
    
    backtrack(0);
    return ans;
    
};