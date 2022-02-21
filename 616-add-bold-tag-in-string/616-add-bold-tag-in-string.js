/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function(s, words) {
    let boldI = new Array(s.length).fill(false);
    let end = -Number.MAX_VALUE;
    
    // mark all index which are bold
    for( let i=0; i < s.length; i++ ) {
        for( let word of words ) {
            if( s.startsWith(word, i) )
                end = Math.max(end, word.length+i);         
        }
        boldI[i] = end > i;
    }
    
    let sb = [];
    for( let i=0; i < s.length; i++ ) {
        // if index not bold then use as is
        if( !boldI[i] ) {
            sb.push(s.charAt(i));
            continue;
        }
        
        // if index in bold, then find end and
        //push the substring with tag
        let end = i;
        while( end < s.length && boldI[end] ) {
            end++;
        }
        sb.push('<b>',s.substring(i, end), '</b>');
        i = end-1;
    }
    
    return sb.join("");
};