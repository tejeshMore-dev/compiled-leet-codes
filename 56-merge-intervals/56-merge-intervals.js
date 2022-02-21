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
        let lastMerged = mergedIntervals[mergedIntervals.length-1];
        // if last Merged end is >= current start then
        // >> stil merge present >> update end 
        //(check diagram at end of code )
        if( lastMerged[1] >= intervals[i][0] ) {
            lastMerged[1] = Math.max(lastMerged[1], intervals[i][1])
        } else {
            // if no merge then push as is
            mergedIntervals.push( intervals[i] )
        }
    }
    
    return mergedIntervals;
};
/*
---------
   ----------  >> merge >> since last end > current start
                ----------
                              --------    
*/