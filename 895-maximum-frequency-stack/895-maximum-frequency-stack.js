
var FreqStack = function() {
    this.map = {};
    this.stack = {};
    this.max = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    if( !this.map.hasOwnProperty(val) )
        this.map[val] = 0;
    
    this.map[val] += 1;
    
    if( !this.stack.hasOwnProperty(this.map[val]) )
        this.stack[this.map[val]] = [];
    
    this.stack[this.map[val]].push(val);
    this.max = Math.max( this.map[val], this.max );
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let val = this.stack[this.max].pop();
    
    this.map[val]  -= 1;
    if( this.stack[this.max].length === 0 )
        this.max--;
    
    return val;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */