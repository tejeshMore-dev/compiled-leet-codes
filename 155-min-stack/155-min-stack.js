var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min;
    if( !this.stack.length )
        min = val;
    else
        min = Math.min(val, this.stack[this.stack.length-1].min);
    
    this.stack.push({ val, min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {    
    return this.stack[this.stack.length-1].val
};


/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */



/*
[  6 6 7 7 -8]





7 6
6 6
6 6











*/