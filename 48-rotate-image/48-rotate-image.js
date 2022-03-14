/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let l = 0, r = matrix.length-1;
    
    while( l < r ) {
        let top = l, bottom = r;
        
        for( let i=0; i < r-l; i++ ) {
            let temp = matrix[top][l+i];
        
            matrix[top][l+i] = matrix[bottom-i][l];
            
            matrix[bottom-i][l] = matrix[bottom][r-i];
            
            matrix[bottom][r-i] = matrix[top+i][r];
            
            matrix[top+i][r] = temp ;
        }
        l++;
        r--;
    }
};
/*

 l     top                  r    


bottom


*/