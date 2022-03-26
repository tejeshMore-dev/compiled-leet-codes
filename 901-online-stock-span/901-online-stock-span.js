
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    if( this.stack.length === 0 ) {
        this.stack.push({ span:1, price })
        return 1;
    }
    
    let span = 1;
    while( this.stack.length && price >= this.stack[this.stack.length-1].price ) {
        span += this.stack.pop().span;
    }
    
    this.stack.push({ span, price });
    return span
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */