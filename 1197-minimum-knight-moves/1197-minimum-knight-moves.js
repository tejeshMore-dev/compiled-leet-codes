/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    let directions = [ [-2, 1], [-1, 2], [-1, -2], [-2, -1], [2, 1], [1, 2], [1, -2], [2, -1]]; 
    
    let queue = [[0, 0]], minMoves = 0;
    let visited = new Set();
    visited.add(`${0}-${0}`);
    
    while( queue.length > 0 ) {
        let length = queue.length;
        
        for( let i = 0; i < length; i++ ) {
            let [x1, y1] = queue.shift();
        
            if( x1 === x && y1 === y ) {
                return minMoves;
            }

            directions.map((direction) => {
                let [xd, yd] = direction;
                xd += x1;
                yd += y1;
                if( !visited.has(`${xd}-${yd}`) ){
                    queue.push([xd, yd]);
                    visited.add(`${xd}-${yd}`);
                }

            })
        }

        minMoves++;        
    }
    
    return minMoves;
};