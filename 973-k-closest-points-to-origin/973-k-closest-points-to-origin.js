/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let ans = [];
    
    let minHeap = new Heap();
    for( let i = 0; i < points.length; i++ ) {
        let [ x, y ] = points[i];
        minHeap.insert( (x ** 2 + y ** 2), points[i] );
        
    }
    while( k-- ) {
        // console.log( minHeap.remove() )
        ans.push( minHeap.remove().obj )    
    };
    
    return ans
};

class Node {
    constructor(val, obj = null) {
        this.val = val;
        this.obj = obj;
    }
}


//min Heap
class Heap {
    constructor() {
        this.data = [];
    }
    
    insert(val, obj = null) {
        this.data.push( new Node(val, obj) );
        let  index = this.data.length - 1;
        
        while( index > 0 && this.data[index].val < this.data[getPI(index)].val ) {
            let temp = this.data[getPI(index)];
            this.data[getPI(index)] = this.data[index];
            this.data[index] = temp;
            index = getPI(index);
        }
        
        function getPI() {
            return Math.floor( (index - 1)/2 );
        }
    }
    
    remove() {
        if( this.data.length === 0 )
            return
        
        let min = this.data[0];
        let current = this.data.pop();
        this.data[0] = current;
        let index = 0, length = this.data.length;
        
        while( 1 ) {
            let lcI = index*2+1, rcI = index*2+2;
            let swap = null;
            
            if( lcI < length ) {
                if( this.data[lcI].val < current.val )
                    swap = lcI;
            }
            
            if( rcI < length ) {
                if( ( !swap && this.data[rcI].val < current.val ) ||
                    ( swap && this.data[rcI].val < this.data[lcI].val ) ) {
                    swap = rcI;   
                }
            }
            
            if( !swap )
                break;
            
            let temp = this.data[swap];
            this.data[swap] = current;
            this.data[index] = temp;
            index = swap;
        }
        
        return min;
    }
}