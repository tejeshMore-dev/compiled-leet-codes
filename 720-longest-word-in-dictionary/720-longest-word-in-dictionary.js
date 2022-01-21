/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words = words.sort();
    let map = {};    
    let result = "";
    
    for( let word of words ) {
        if( word.length === 1 || map[word.substring(0, word.length-1)] ) {
            result = word.length > result.length ? word : result;
            map[word] = 1;
        }
    }
    
    return result
};