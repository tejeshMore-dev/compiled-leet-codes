class Node{
    constructor(val, min, nextN) {
        this.val = val;
        this.min = min;
        this.next = nextN;
    }

}

var MinStack = function() {
    // this.stack = [];
    this.head;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // let getMinVal = this.getMin()
    // let min = (getMinVal || getMinVal === 0 ) && getMinVal < val  ? getMinVal : val
    // this.stack.push({val, min});
    
    if( !this.head )
        this.head = new Node(val, val)
    else
        this.head = new Node(val, val < this.head.min ? val : this.head.min, this.head )
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.head = this.head.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head ? this.head.val : null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.head ? this.head.min : null
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */