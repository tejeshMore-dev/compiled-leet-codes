/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    let rows = rooms.length;
    let cols = rooms[0].length;
    let queue = [];
    let visited = new Set();
    let directions = [ [-1, 0], [1, 0], [0, -1], [0, 1] ];
    let dist = 0;
    
    for( let r=0; r < rows; r++ ) {
        for( let c=0; c<cols; c++ ) {
            if( rooms[r][c] === 0 ) {
                queue.push([r, c]);
                visited.add(`${r}-${c}`);
            }
            else if( rooms[r][c] === -1 )
                visited.add(`${r}-${c}`);
        }
    }
    while( queue.length > 0 ) {
        
        let length = queue.length;
        let newRooms = [];
        
        for( let i = 0; i<length; i++ ) {
            let [ r, c ] = queue.shift();
            rooms[r][c] = dist;
            directions.map((direction) => {
                let [ rD, cD ] = direction;
                let rN = rD+r;
                let cN = cD+c;
                
                if( rN >= 0 && cN >= 0 && rN < rows && 
                   cN < cols && !visited.has(`${rN}-${cN}`) ) {
                    newRooms.push([rN, cN]);
                    visited.add((`${rN}-${cN}`))

                }
            });
        }
        console.log(...newRooms, dist)
        dist = dist +1;
        queue.push(...newRooms);
    }
    
    
};