/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let len = s.length;
    let pLen = helper( s, 0, s.length-1, {} );
    return len - pLen
};

function helper(s, l, r, cache) {
    if( l === s.length || r < 0 )
        return 0
    
    if( cache[`${l}-${r}`] )
        return cache[`${l}-${r}`]
    
    if( s.charAt(l) === s.charAt(r) ) {
        return cache[`${l}-${r}`] = 1 + helper(s, l+1, r-1, cache )
    } else {
        return cache[`${l}-${r}`] = Math.max( helper(s, l, r-1, cache ), helper(s, l+1, r, cache ) )
    }
    
    
}