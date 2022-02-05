/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if( n === 0 ) return 0
    if( n === 1 ) return 1
    if( n === 2 ) return 2
    
    let oneStepBefore = 2, twoStepBefore = 1, allWays = 0;
    
    for( let i=2; i<n; i++ ) {
        allWays = oneStepBefore + twoStepBefore;
        twoStepBefore = oneStepBefore;
        oneStepBefore = allWays
    }
    
    return allWays
};