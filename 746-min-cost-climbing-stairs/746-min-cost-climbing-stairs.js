/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let cache = {};
    return Math.min( helper(0), helper(1) );
    
    function helper( i ) {
        if( i >= cost.length )
            return 0;
        
        if( cache.hasOwnProperty(i) )
            return cache[i]
        
        let ans = Math.min( helper(i+1) + cost[i], helper(i+2) + cost[i] )
        cache[i] = ans;
        return ans;
        
    }
};

/*
10 15 20

10+15  10+20
15+20  15+0




*/