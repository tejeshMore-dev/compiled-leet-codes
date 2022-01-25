/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0, rows = grid.length, columns = grid[0].length;
    let directions = [ [0, -1], [0, 1], [1,0], [-1,0] ] // left right top bottom
    let queue = [];
    
    for( let r=0; r<rows; r++ ) {
        for( let c=0; c<columns; c++ ) {
            if( grid[r][c] ) {
                maxArea = Math.max(findArea([[r,c]]), maxArea);
            }
        }
    }
    
    function findArea(queue) {
        let area = 0;
        while( queue.length > 0 ) {
            let [r,c] = queue.shift();
            grid[r][c] = 0;
            area++;
            directions.map((dir) => {
               let [ row, col ] = [ r+dir[0], c+dir[1] ];
                
                if( row < 0 || col < 0 || row >= rows || col >= columns || grid[row][col] === 0 ) {
                } else {
                    grid[row][col] = 0
                    queue.push([row, col])       
                }
            });
            
        }
        return area;
    }
    
    return maxArea;
};


// var maxAreaOfIsland = function(grid) {
//     let ans = 0, n = grid.length, m = grid[0].length
//     const trav = (i, j) => {
//         if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0
//         grid[i][j] = 0
//         return 1 + trav(i-1, j) + trav(i, j-1) + trav(i+1, j) + trav(i, j+1)
//     }
//     for (let i = 0; i < n; i++) 
//         for (let j = 0; j < m; j++)
//             if (grid[i][j]) ans = Math.max(ans, trav(i, j))
//     return ans
// };


/*
max =
    
    max =  0;
    direction = [];
    rows 
    columns
    
    iterate row
        col
        
        if(i)
        find area
        update max
        
        
        find area
        bfs 
        mark counted ones
        sum 

*/