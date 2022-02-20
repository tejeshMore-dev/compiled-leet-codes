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
    
    startT.sort((a, b) => a-b )
    endT.sort((a, b) => a-b )
    let sP = 0, eP = 0;
    
    
    console.log(startT, endT)
    
    while( eP < endT.length && sP < startT.length ) {
        if( startT[sP] < endT[eP] ) {
            roomRequired++;
            ans = Math.max(roomRequired, ans);
            sP++;
        } else if( startT[sP] > endT[eP] ) {
            roomRequired--;
            eP++;
        } else {
            eP++;
            sP++;
        }
    }
    
    return ans
};