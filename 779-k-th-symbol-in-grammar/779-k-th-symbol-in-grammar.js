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
    let mid = (2 ** (n-1))/2;
    if( k <= mid ) {
        return helper( n-1, k )
    } else {
        return helper( n-1, k-mid ) ? 0 : 1
    } 
}