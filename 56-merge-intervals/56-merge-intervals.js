/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0] );
    
    // push first interval as defult
    let mergedIntervals = [ intervals[0] ];
    
    for( let i=0; i < intervals.length; i++ ) {
        let end = mergedIntervals[mergedIntervals.length-1];
        
        if( end[1] >= intervals[i][0] ) {
            end[1] = Math.max(end[1], intervals[i][1])
        } else {
            // if no merge then push as is
            mergedIntervals.push( intervals[i] )
        }
    }
    
    return mergedIntervals;
};