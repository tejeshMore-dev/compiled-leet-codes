/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class MinHeap {
    constructor() {
        this.data = [];
    }
    
    insert(val) {
        this.data.push(val);
        let index = this.data.length-1;
        
        while( index > 0 && this.data[index] < this.data[getPI(index)] ) {
            let temp = this.data[getPI(index)];
            this.data[getPI(index)] = this.data[index];
            this.data[index] = temp;
            index = getPI(index);
        }
        
        function getPI(index){
            return Math.floor((index-1)/2);
        }
    }
    
    remove() {
        if( this.data.length === 1 )
            return this.data.pop()
        
        let min = this.data[0];
        let current = this.data.pop();
        this.data[0] = current;
        let index = 0, length = this.data.length;
        
        while( true ) {
            let lcI = index * 2 + 1, rcI = index * 2 + 2;
            let swapI = null;
            
            if( lcI < length && this.data[lcI] < current ) {
                swapI = lcI 
            }
            
            if( rcI < length ) {
                if( ( !swapI && this.data[rcI] < current ) ||
                    ( swapI && this.data[rcI] < this.data[lcI] ) ) {
                    swapI = rcI
                }
            }
            
            if( !swapI )
                break;
            
            let temp = this.data[swapI];
            this.data[swapI] = current;
            this.data[index] = temp;
            index = swapI;
            
        }
        
        return min;
    }
}



var mergeKLists = function(lists) {
    
    // push all node values in heap
    let minHeap = new MinHeap();
    for( let node of lists  ) {
        while( node ) {
            minHeap.insert(node.val);
            node = node.next;
        }
    }
    
    // pop all Heap values and add them in linkedList
    let val = minHeap.remove(), head = new ListNode(0), current = head;
    while( val || val === 0 ) {
        let newNode = new ListNode(val);
        current.next = newNode
        current = newNode;
        val = minHeap.remove();
    }
    
    return head.next;
};
