/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    return helper( n, k );
};

function helper( n, k ) {
    if( n === 1  )
        return 0
    let len = 2 ** (n-1);
    
    if( k <= (len /2) ) {
        return helper( n-1, k )
    } else {
        return helper( n-1, (k-(len/2)) ) ? 0 : 1
    } 
}