/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    let res = 0;
    let currentMax = [ -1, -1 ];
    
    intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0] );
    for( let i=0; i < intervals.length; i++ ) {
        if( intervals[i][1] > currentMax[1] ) {
            currentMax = intervals[i];
            res++;
        }
    }
    
    return res;
};