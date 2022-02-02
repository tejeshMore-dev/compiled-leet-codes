var numIslands = function(grid) {
    let height = grid.length;
    let width = grid[0].length;
    let result = 0;
    let directions = [[-1,0],[0,1],[1,0],[0,-1]] // left right top bottom
    
    for( let row = 0; row < height; row++ ) {
        for (let col = 0; col < width; col++) {
            if( grid[row][col] === "1" ) {
                result++
                markNeighbourLand([[row,col]]); // mark neighbour land as "0"

            }
            
        }
    }
    
    return result;
    
    function markNeighbourLand(queue) {
        while(queue.length > 0) {
            let [r, c] = queue.pop();
            grid[r][c] = "0";
            
            directions.map((direction) => {
               let row = r + direction[0];
               let col = c + direction[1];
                
               if( row >= 0 && row < height && col >= 0 && col < width && grid[row][col] === "1" ){
                    queue.push([row, col])
                    
               }
            });
            
        }
    }
};