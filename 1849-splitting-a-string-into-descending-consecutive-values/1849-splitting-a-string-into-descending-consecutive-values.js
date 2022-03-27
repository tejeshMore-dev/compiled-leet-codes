/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function(s) {
    for( let i=0; i < s.length-1; i++ ) {
        let val = parseInt(s.substring(0, i+1));
        if( valid(i+1, val) )
            return true
    }
    return false;
    
    function valid(i, prev ) {
        if( i === s.length )
            return true
        
        for( let j=i; j < s.length; j++ ) {
            let val = parseInt(s.substring(i, j+1));
            if( val + 1 === prev && valid(j+1, val) )
                return true
        }
        
        return false;
    }
};