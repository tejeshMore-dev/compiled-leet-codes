/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let row = new Set();
    let col = new Set();
    let posDig = new Set();
    let negDig = new Set();
    let ans = [];
    
    findValid(0, new Array(n).fill(".").map((a) => new Array(n).fill(".")) );
    return ans;
    
    
    function findValid(r, current) {
        if( r === n ) {
            let tem = [];
            current.map( (a) => tem.push(a.join("")) );
            ans.push(tem);
        }
        
        for( let c=0; c<n; c++ ) {
            if( !(row.has(r) || col.has(c) || posDig.has(r+c) || negDig.has(r-c) ) ) {
                current[r][c] = "Q";
                row.add(r);
                col.add(c);
                posDig.add(r+c);
                negDig.add(r-c);
                
                findValid(r+1, current);
                
                row.delete(r);
                col.delete(c);
                posDig.delete(r+c);
                negDig.delete(r-c);
                current[r][c] = ".";
            }
        }

    }
};
/*

for every col

for every row
place
update map
recursion r+1

remove from map


*/