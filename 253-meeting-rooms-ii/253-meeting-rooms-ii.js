/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let startT = new Array(intervals.length);
    let endT = new Array(intervals.length);
    let ans = 0, roomRequired = 0;
    
    for( let i=0; i < intervals.length; i++ ) {
        let [ start, end ] = intervals[i];
        
        startT[i] = start;
        endT[i] = end;
    }
    
    startT.sort((a, b) => a-b ) //  sort all start time
    endT.sort((a, b) => a-b ) // start all end time
    let sP = 0, eP = 0;
        
    while( eP < endT.length && sP < startT.length ) {
        if( startT[sP] < endT[eP] ) { // meeting already started
            roomRequired++;
            ans = Math.max(roomRequired, ans);
            sP++;
        } else { //meeting ended
            roomRequired--;
            eP++;
        }
    }
    
    return ans
};