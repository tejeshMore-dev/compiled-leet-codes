/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let res = 1;
    
    points.sort((a, b) => a[1] - b[1] );
    let sp = points[0][0], ep = points[0][1];
    
    for( let i = 1; i < points.length; i++ ) {
        let [ s, e ] = points[i];
        
        if( s > ep ) {
            ep = e;
            res++;
        }
    }
    
    return res;
};