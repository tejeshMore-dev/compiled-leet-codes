/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap = new MinHeap();
    this.maxK = k;
    
    for( let num of nums ) {
        this.minHeap.add(num);
    }
    
    while( this.minHeap.size > k ) {
        this.minHeap.remove();
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.add(val);
    while( this.minHeap.size > this.maxK ) {
        this.minHeap.remove();
    }
    return this.minHeap.peek();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MinHeap {
    constructor() {
        this.data = [];
        this.size = 0;
    }
    
    add(val) {
        this.data.push(val);
        let i = this.data.length-1;
        this.size++;
        while( i > 0 && this.data[i] < this.data[getPI(i)] ) {
            let temp = this.data[i];
            this.data[i] = this.data[getPI(i)];
            this.data[getPI(i)] = temp;
            i = getPI(i);
        }
        
        function getPI(i) {
            return Math.floor((i-1)/2)
        }
    }
    
    remove() {
        if( this.data.length === 0 )
            return 
        
        this.size--;

        if( this.data.length === 1 )
            return this.data.pop();
        
        let min = this.data[0];
        let current = this.data.pop();
        this.data[0] = current;
        let i = 0, len = this.data.length;
        
        while( 1 ) {
            let lCI = i*2+1, rCI = i*2+2, swap = null;
            
            if( lCI < len && this.data[lCI] < current ) {
                swap = lCI;
            }
            
            if( rCI < len ) {
                if( (!swap && this.data[rCI] < current) ||
                    ( swap && this.data[rCI] < this.data[lCI] ) ) {
                    swap = rCI;
                }
            }
            
            if( !swap )
                break
            
            this.data[i] = this.data[swap];
            this.data[swap] = current;
            i = swap;
        }
        
        return min;
    }
    
    peek() {
        return this.data[0]
    }
}
