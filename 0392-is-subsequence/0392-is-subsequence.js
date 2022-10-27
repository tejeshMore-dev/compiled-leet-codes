/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if( t.length < s.length )
        return false;
    
    let l1 = 0, l2 = 0;
    
    while( l2 < t.length ) {
        if(s[l1] === t[l2]) {
            l1++;
            if( l1 === s.length )
                break
        }
           
        l2++;
    }
    
    return l1 === s.length;
};