/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class Heap {
    constructor(){
        this.data = [];
    }
    
    insert(val) {
        this.data.push(val);
        let index = this.data.length-1;
        
        while( index > 0 && this.data[index] > this.data[parentIndex(index)] ) {
            let temp = this.data[index], pIndex = parentIndex(index);
            this.data[index] = this.data[pIndex]
            this.data[pIndex] = temp;
            index = pIndex;
        }
        
        function parentIndex(index) {
            return Math.floor( (index - 1)/2 );
        }
        
    }
    
    remove() {
        const max = this.data[0];
        const end = this.data.pop();
        this.data[0] = end;
        let current = this.data[0], length = this.data.length, index = 0;
        
        while( true ) {
            let leftChild, rightChild, swap = null;
            let leftChildIndex = index * 2 + 1, rightChildIndex = index * 2 + 2;
            
            if( leftChildIndex < length && this.data[leftChildIndex] > current ) {
                swap = leftChildIndex;
            }
            
            if( rightChildIndex < length ) {
                if( ( swap === null && this.data[rightChildIndex] > current) ||
                    ( swap !== null && this.data[rightChildIndex] > this.data[leftChildIndex] ) ) {
                    swap = rightChildIndex
                }
            }
            
            if( swap === null ) break
            
            this.data[index] = this.data[swap];
            this.data[swap] = current;
            index = swap;
        }
        
        return max;
    }
}


var findKthLargest = function(nums, k) {
    const heap = new Heap();
    let ans;
    
    for( let num of nums ) {
        heap.insert(num);
    }
    
    while( k-- ) {
        ans = heap.remove();
    }
        
    return ans;
};