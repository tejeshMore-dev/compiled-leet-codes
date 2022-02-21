/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let rows = grid.length, cols = grid[0].length, directions = [ [0,-1], [0,1], [-1,0], [1,0] ];
    
    function dfs( queue ) {
        let p=0;
        while( queue[0] ) {
            let [r, c] = queue.shift();
            grid[r][c] = -1;

            for( let d of directions ){
                let r1 = r+d[0], c1 = c+d[1];
                
                if( r1 < 0 || c1 < 0 || r1 >= rows || c1 >= cols || grid[r1][c1] === 0 ) p++;
                if( r1 < 0 || c1 < 0 || r1 >= rows || c1 >= cols || grid[r1][c1] !== 1 ){
                    continue
                                        
                }
                
                grid[r1][c1] = -1;
                queue.push([r1, c1]);    
            }
        }
        
        return p;
    }
    
    for( let r = 0; r < rows ; r++ ) {
        for( let c = 0; c < cols; c++  ) {
            if( grid[r][c] === 1 ) {
                return dfs([[r,c]]);
            }
        }
    }
};
 