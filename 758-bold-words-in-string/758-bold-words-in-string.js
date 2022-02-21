/**
 * @param {string[]} words
 * @param {string} s
 * @return {string}
 */
var boldWords = function(words, s) {
    let boldI = new Array(s.length).fill(false);
    let end = -1;
    
    for( let i=0; i < s.length; i++ ) {
        for( let word of words ) {
            if( s.startsWith(word, i) ) {
                end = Math.max(end, i+word.length);
            }
        }
        
        boldI[i] = end > i
    }
    
    let sb = [];
    for( let i=0; i < s.length; i++ ) {
        if( !boldI[i] ) {
            sb.push(s.charAt(i));
            continue;
        }
        
        let end =i;
        while( end < s.length && boldI[end] ) {
            end++
        }
        
        sb.push('<b>', s.substring(i, end), '</b>');
        i = end-1;
    }
    
    return sb.join("");
};