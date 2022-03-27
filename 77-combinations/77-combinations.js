/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */


var combine = function(n, k) {
    res = [];
    
    function helper( combination, start ) {        
        if( combination.length === k ) {
            res.push( [ ...combination ]);
            return
        }
        
        if( start > n )
            return 
        
        combination.push(start)
        helper( combination, start+1  )
        
        combination.pop();
        helper( combination, start+1  )
    }
    
    helper( comb=[], start=1);
    return res;
};

/*
[1 2 3 4]

[1] []
[12] [1] [2] []
[13] [1] [23] [2] [3] []
[14] [1] [24] [2] [34] [3] [4] []





[12] [13] [23] [14] [24] [34]













*/