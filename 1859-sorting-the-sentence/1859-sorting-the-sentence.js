/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let array = [], lp = 0;

    for( let i = 0; i < s.length; i++ ) {
        if( Number.isInteger(parseInt(s.charAt(i))) ) {
            array[ parseInt(s.charAt(i)) - 1 ] = s.substring( lp , i );
            i += 2;
            lp = i;
        }
    // console.log(array)
        
    }
    // console.log(array)
    return array.join(" ");
};