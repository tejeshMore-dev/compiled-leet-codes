/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    // create order mapping
    let map = {};
        for( let i = 0; i < order.length; i++ ) {
            map[order.charAt(i)] = i
    }
    
    // compare words
    for( let i = 0 ; i < words.length-1; i++ ) {
        if( !isSorted(words[i], words[i+1]) ) {
        return false	
        }	
    }
    return true

    // helper function
    function isSorted( a, b ) {
        for( let i = 0; i < a.length && i < b.length; i++ ) {
            if( b.charAt(i) !== a.charAt(i) )
                return map[b.charAt(i)] >  map[a.charAt(i)]
        }
            return a.length <= b.length
    }
};

/*










































*/

