/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let ans = 0, directions = [ [ 0, -1 ], [ 0, 1 ], [ -1, 0 ], [ 1,0] ];
	let rows = grid.length, columns = grid[0].length;

    for( let r = 0; r < rows; r++ ) {
        for( let c = 0; c < columns; c++ ) {
            if( grid[r][c] )
                dfs([[r, c]]);
        }
    }


    function dfs(queue) {
        let area = 0;

        while( queue.length > 0 ) {
            let [ row, col ] = queue.shift(); 
            area++;
            grid[row][col] = -1;

            for( let i = 0; i < directions.length; i++ ) {
                let dir = directions[i];
                let [ r, c ] = [ row + dir[0], col+dir[1] ];

                if(r < 0 || c < 0 || r >= rows || c >= columns || grid[r][c] !==  1 ){
                    continue
                } else {
                    grid[r][c] = -1;
                    queue.push([r, c]);
                }
            }
        }
        ans = Math.max(ans, area);
    }	
	return ans
};

