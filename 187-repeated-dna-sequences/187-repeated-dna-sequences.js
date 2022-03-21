/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let seen = new Set(), res = new Set();
    
    for( let l=0; l < s.length-9; l++ ) {
        let currS = s.substring(l, l+10 )
        if( seen.has(currS) )
            res.add(currS)
        seen.add(currS);
    }
    
    return [ ...res ];
};