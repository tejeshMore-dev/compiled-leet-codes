/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let directions = [ [-1, 0], [1,0], [0, -1], [0, 1] ];
    let height = image.length;
    let width = image[0].length;
    
    fillNeighbour( [[sr,sc]], image[sr][sc] , newColor );
    return image;
    
    function fillNeighbour(queue, oldColor, newColor) {
        while(queue.length > 0){
            let [a, b] = queue.shift();
            image[a][b] = newColor;

            directions.map((direction) => {
                let [m,n] = direction;
                let x = a+m;
                let y = b+n;
                
                if( x >=0 && y >= 0 && x < height && y < width && image[x][y] === oldColor && image[x][y]  !== newColor ) {
                    queue.push([x, y]);  
                }
            });
        }
    }
};



