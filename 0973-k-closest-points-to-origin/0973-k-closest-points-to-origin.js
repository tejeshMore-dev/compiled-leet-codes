/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let minHeap = new MinPriorityQueue({
        priority: val => val.distance
    });
    
    for( let point of points ) {
        let [x, y] = point;
        let distance = Math.sqrt( (x*x) + (y*y) );
        minHeap.enqueue({ distance, point })
    }
    
    let res = []
    while( k ) {
        res.push(minHeap.dequeue().element.point);
        k--;
    }
    
    return res;
};