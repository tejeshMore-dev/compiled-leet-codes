/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length, cols = matrix[0].length;
    let lp = 0, rp = rows * cols-1;
    let result = false;
    
    while( lp <= rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        let midVal = matrix[ Math.floor(mid/cols) ][mid%cols];
        
        if( midVal === target )
            return result = true;
        else if( midVal < target )
            lp = mid+1;
        else
            rp = mid-1;
    }
    
    return result;
};