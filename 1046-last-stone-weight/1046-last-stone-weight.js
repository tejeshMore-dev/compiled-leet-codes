/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let maxHeap = new MaxPriorityQueue({
        priority: val => val
    });
    
    for( let stone of stones ) {
        maxHeap.enqueue(stone);
    }
    
    while( maxHeap.size() > 1 ) {
        let a = maxHeap.dequeue().priority;
        let b = maxHeap.dequeue().priority;
        
        let diff = Math.abs(a-b);
        if( diff )
            maxHeap.enqueue(diff);
    }
    
    return maxHeap.size() ? maxHeap.dequeue().priority : 0;
};