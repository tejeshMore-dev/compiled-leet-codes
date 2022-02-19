/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let map = {}, odds = 0;;
    
    for( let i=0; i < s.length; i++ ) {
        if( !map[s.charAt(i)] )
            map[s.charAt(i)] = 0;
        
        map[s.charAt(i)] = map[s.charAt(i)] + 1;
    }
    
    for( let key in map ) {
        if( map[key] % 2 !== 0 )
            odds++;
        
        if( odds > 1 )
            return false;
    }
    
    return true;
};