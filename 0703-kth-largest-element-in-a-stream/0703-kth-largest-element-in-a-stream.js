/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap = new MinPriorityQueue({
        priority: val => val
    });
    this.k = k;
    
    for( let num of nums ) {
        this.minHeap.enqueue(num);
    }
    
    while( this.minHeap.size() > this.k ) {
         this.minHeap.dequeue(); 
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.enqueue(val);
    
    while( this.minHeap.size() > this.k ) {
        this.minHeap.dequeue();
    }
    return this.minHeap.front().priority;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */