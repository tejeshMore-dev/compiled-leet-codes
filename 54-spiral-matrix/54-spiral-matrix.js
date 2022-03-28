/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let l = 0, r = matrix[0].length;
    let t = 0, b = matrix.length;
    let res = [];
    
    while( l < r && t < b ) {
        // top left >> right
        for( let i=l; i < r; i++ ) {
            res.push(matrix[t][i])
        }
        t += 1;
        
        // right top >> bottom
        for( let i=t; i < b; i++ ) {
            res.push(matrix[i][r-1])
        }
        r -= 1;
        
        if( !(l < r && t < b)  )
            break;
        
        // bottom right >> left
        for( let i=r-1; i >= l; i-- ) {
            res.push(matrix[b-1][i])
        }
        b -= 1;
        
        // left bottom >> top
        for( let i=b-1; i >= t; i-- ) {
            res.push(matrix[i][l])
        }
        l += 1;
        
    }
    
    return res;
};