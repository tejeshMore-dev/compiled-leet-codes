/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = {}, ans = [];
    
    for( let word of words ) {
        if( !map[word] )
            map[word] = 0
        map[word] = map[word] + 1;
    }
    const heap = new Heap();
    for( let key in map ) {
        heap.insert( key, map[key] );
    }
    
    while( k-- ) {
        ans.push(heap.remove().label);
    }
    
    return ans;
};


class Heap {
    constructor() {
        this.data = [];
    }
    
    insert( label, val ) {
        this.data.push({ label, val })
        let index = this.data.length-1;
        
        while( index > 0 && 
               isGreater(this.data[index], this.data[getParentIndex(index)]) ) {
            let temp = this.data[getParentIndex(index)];
            this.data[ getParentIndex(index) ] = this.data[index];
            this.data[index] = temp;
            index = Math.floor(index -1 /2);
        }
    
        function getParentIndex(index) {
            return Math.floor(index-1/2);
        }
        
        function isGreater(a, b) {
           if( a.val > b.val )
               return true
            return a.val === b.val && a.label < b.label
        }
        
    }
    
    remove() {
        let max = this.data[0];
        
        let current = this.data.pop(); 
        this.data[0] = current;
        let index = 0, length = this.data.length;
        
        while( 1 ) {
            let lChildIndex = index*2+1, rChildIndex = index*2+2, swap = null;
                
            if( lChildIndex < length && 
                isGreater(this.data[lChildIndex], this.data[index]) ) {
                swap = lChildIndex;
            }
            
            if( rChildIndex < length ){
                if( ( swap === null && isGreater(this.data[rChildIndex], this.data[index] ) ||
                    ( swap !==null && isGreater(this.data[rChildIndex], this.data[lChildIndex]) ) ) ) {
                   swap = rChildIndex;
                }
            }
            
            if( !swap )
                break
            
            this.data[index] = this.data[swap];
            this.data[swap] = current;
            index = swap;
            
        }
        return max
        
        function isGreater(a, b) {
           if( a.val > b.val )
               return true
            return a.val === b.val && a.label < b.label        }
    }
}