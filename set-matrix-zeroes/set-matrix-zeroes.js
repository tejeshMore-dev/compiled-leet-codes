/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let row0 = 1;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0

                if (i === 0)
                    row0 = 0
                else
                    matrix[i][0] = 0
            }
        }
    }
    
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < columns; j++) {
            if (matrix[0][j] === 0 || matrix[i][0] === 0 )
                matrix[i][j] = 0;
        }
    }


    if (matrix[0][0] === 0) {
        let row = 0;
        while (row < rows) {
            matrix[row][0] = 0;
            row++;
        }
    }
    
    if (row0 === 0) {
        let column = 0;
        while (column < columns) {
            matrix[0][column] = 0;
            column++;
        }
    }
    return matrix
};