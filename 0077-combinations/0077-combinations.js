/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if( n === 1 )
        return [[1]];
    
    let res = [], current = [];
    findCombine(1, 0);
    return res;
    
    
    function findCombine(i, size) {
        if( i > n || size === k ) {
            if( size === k )
                res.push([ ...current ]);
            return;
        }
        
        current.push(i);
        findCombine(i+1, size+1);
        
        current.pop();
        findCombine(i+1, size);
    }
};