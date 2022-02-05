/**
 * @param {number} size
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.start = null;
        this.end = null;
        this.size = 0;
    }
    
    insert(val) {
        let node = new Node(val);
        this.size++;
        if( !this.start ) {
            this.start = node;
            this.end = node;
            return node.val;
        }
        
        this.end.next = node;
        this.end = node;
        return node.val;
    }
    
    remove() {
        let node = this.start;
        if( node ) {
            this.start = node.next;
            this.size--;   
            return node.val;
        }
        return null;
    }
}


var MovingAverage = function(size) {
    this.maxSize = size;
    this.ll = new LinkedList();
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {    
    if( this.ll.size === this.maxSize ) {
        this.sum -= this.ll.remove();
    }
    
    this.sum += this.ll.insert(val);
    return this.sum/this.ll.size
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */