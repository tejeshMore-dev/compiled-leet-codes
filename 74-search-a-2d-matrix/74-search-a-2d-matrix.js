/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {    
    let rows = matrix.length, cols = matrix[0].length;
    let lp = 0, rp =  rows * cols -1;
    let res = false;
    
    while( lp < rp ) {
        let mid = lp + Math.ceil((rp-lp)/2);
        let row = Math.floor(mid/cols);
        let col = mid%cols;
        let val = matrix[row][col];
        
        if( val > target )
            rp = mid-1;
        else
            lp = mid;
    }
    
    return matrix[Math.floor(lp/cols)][rp%cols] === target;
};

/*



1,3,5,7,10,11,16,20.23,30,34,60
l
                              r
                              
3
0 3

6
r c
1 2

4
1 0

7
r c
1  3







*/