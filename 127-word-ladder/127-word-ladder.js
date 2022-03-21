/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let set = new Set( wordList );
    
    if( !set.has(endWord) )
        return 0
    
    let queue = [ beginWord ];
    let level = 0;
    
    while( queue.length ) {
        let length = queue.length;
        level++;
        
        for( let c=0; c<length; c++ ) {
            let currWord = queue.shift();
            
            for( let i=0; i < currWord.length; i++ ) {
                let temp = currWord.split("");
                
                for( let j = 97; j < 123; j++ ) {
                    char = String.fromCharCode(j);
                    temp[i] = char;
                    if( currWord === temp.join("") )
                        continue;
                    if( temp.join("") === endWord )
                        return level+1
                    if( set.has( temp.join("") ) ) {
                        queue.push( temp.join("") );
                        set.delete( temp.join("") );              
                    }
                }
            }   
        }
    }
    
    return 0
};