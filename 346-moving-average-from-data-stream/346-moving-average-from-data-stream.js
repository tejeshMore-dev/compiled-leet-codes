/**
 * @param {number} size
 */

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }    
}

class LinkedList{
    constructor() {
        this.start = null;
        this.end = null;
        this.size = 0;
    }
    
    insert(val) {
        let nNode = new Node(val);
        this.size++;
        if( !this.start ) {
            this.start = nNode;
            this.end = nNode;
            return nNode.val;
        }
        
        this.end.next = nNode;
        this.end = nNode;
        
        return nNode.val;
    }
    
    remove() {
        let node = this.start;

        if( node ) {
            this.start = this.start.next;
            this.size--;
            return node.val;
        }
        
        return null;
    }
}


var MovingAverage = function(size) {
    this.max = size;
    this.ll = new LinkedList();
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {    
    if( this.ll.size === this.max ) {
        this.sum -= this.ll.remove();
    }
    
    this.sum += this.ll.insert(val);
    return (this.sum/ this.ll.size)
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */