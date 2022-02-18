/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let map = new Map(), ans = wordsDict.length; 
    
    for( let i = 0; i < wordsDict.length; i++ ) {
        if( wordsDict[i] === word1 || wordsDict[i] === word2 ) {
            if( wordsDict[i] === word1 && map.has(word2) ) {
                ans = Math.min(i - map.get(word2), ans);
            }
            if( wordsDict[i] === word2 && map.has(word1) ) {
                ans = Math.min(i - map.get(word1), ans);
            }  
            map.set( wordsDict[i], i );
        }
    }
    
    return ans
};