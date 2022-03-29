/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let diff = [];
    let res = 0;
    
    for( let cost of costs ) {
        let [a, b] = cost;
        diff.push( [ a-b, a, b ] );
    }
    
    diff.sort( (a, b) => a[0] - b[0] );
    
    for( let i=0; i<diff.length; i++ ) {
        if( i < diff.length/2 ) {
            res += diff[i][1];
        } else {
            res += diff[i][2];
        }
    }
    
    return res
};