/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.map = {};
    
    for( let i=0; i < wordsDict.length; i++ ) {
        let word = wordsDict[i];
        if( !this.map[word] )
            this.map[word] = [];
        
        this.map[word].push(i);
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let wI1 = this.map[word1];
    let wI2 = this.map[word2];
    let min = Number.MAX_VALUE;
    
    for( let i=0, j = 0; i < wI1.length && j < wI2.length;  ) {
        if( wI1[i] < wI2[j] ) {
            min = Math.min(min, wI2[j] - wI1[i] );
            i++;
        } else {
            min = Math.min(min, wI1[i] - wI2[j] );
            j++;
        }
    }
    
    return min;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */