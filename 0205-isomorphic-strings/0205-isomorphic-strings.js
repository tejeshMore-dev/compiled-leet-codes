/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = {};
    let set = new Set();
    
    for( let i=0; i<s.length; i++ ) {
        let charS = s[i], charT = t[i];
        if( !map[charS] ) {
            if( set.has(charT) )
                return false;
            map[charS] = charT;
            set.add(charT);
        } else if( map[charS] !== charT ) {
            return false
        }
    }
    
    return true;
};