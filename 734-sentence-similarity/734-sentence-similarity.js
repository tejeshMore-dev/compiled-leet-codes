/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    if( sentence1.length !== sentence2.length )
        return false;
    
    let map = {};
    
    for( let i=0 ; i<similarPairs.length; i++ ) {
        let [ w1, w2 ] = similarPairs[i];
        if( !map[w1] )
            map[w1] = new Set();
        
        if( !map[w2] )
            map[w2] = new Set();
        
        map[w1].add(w2);
        map[w2].add(w1);
    }
    
    for( let i=0 ; i<sentence1.length; i++ ) {
        let w1 = sentence1[i];
        let w2 = sentence2[i];
        
        if( w1 === w2 )
            continue;
        else if( !(map[w1] && map[w1].has(w2) || 
                   map[w2] && map[w2].has(w1) ) )
            return false
    }
    
    return true;
};