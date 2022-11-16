/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let maxHeap = new MaxPriorityQueue({
        priority: val => val
    });
    
    for( let num of nums ) {
        maxHeap.enqueue(num);
    }
    

    let res;
    while( k ) {
        res = maxHeap.dequeue().priority
        k--
    }
    
    return res;
};