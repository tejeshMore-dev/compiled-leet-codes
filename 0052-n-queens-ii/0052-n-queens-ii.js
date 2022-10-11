/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let row = new Set();
    let col = new Set();
    let posDig = new Set();
    let negDig = new Set();
    
    let ans = 0;
    findTotalWays(0);
    return ans
    
    
    function findTotalWays( r ) {
        if( r === n ) {
            ans++;
            return;
        }
        
        for( let c=0; c<n; c++ ) {
            if( !(row.has(r) || col.has(c) || posDig.has(r+c) || negDig.has(r-c)) ) {
                row.add(r);
                col.add(c);
                posDig.add(r+c);
                negDig.add(r-c);
                
                findTotalWays(r+1);
                
                row.delete(r);
                col.delete(c);
                posDig.delete(r+c);
                negDig.delete(r-c);
            }
        }
    }
};