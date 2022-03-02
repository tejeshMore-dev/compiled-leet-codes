/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let prevCost1 = 0;
    let prevCost2 = 0;
    
    for( let i=2; i <=cost.length; i++ ) {
        let min = Math.min( cost[i-1] + prevCost2, cost[i-2] + prevCost1 );
        prevCost1 = prevCost2;
        prevCost2 = min;
    }
    
    return prevCost2;
};

/*
10 15 20

10+15  10+20
15+20  15+0




*/