
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let getMinVal = this.getMin()
    let min = (getMinVal || getMinVal === 0 ) && getMinVal < val  ? getMinVal : val
    this.stack.push({val, min});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length <= 0) return null
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length <= 0) return null
    return this.stack[this.stack.length-1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length === 0) return null
    return this.stack[this.stack.length-1].min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */