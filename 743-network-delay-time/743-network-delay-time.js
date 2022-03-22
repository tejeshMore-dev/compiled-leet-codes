/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = new Graph();
    graph.buildGraph(n, times);
    return graph.findSDS(k);
};

class EdgeNode {
    constructor(from, to, w ) {
        this.from = from;
        this.to = to;
        this.w = w;
    }
}

class Graph {
    constructor() {
        this.graph = {};
    }
    
    buildGraph(v, edges) {
        for( let i=1; i<=v; i++ ) {
            this.graph[i] = [];
        }
        
        for( let edge of edges ) {
            let [ from, to, w ]= edge;
            
            this.graph[from].push( new EdgeNode(from, to, w) )
        }
    }
    
    findSDS(s) {
        s = `${s}`;
        const MAX = Number.MAX_VALUE;
        let visited = new Set();
        let distance = new Map();
        
        for( let node of Object.keys(this.graph) ) {
            distance.set( `${node}`, MAX );
        }
        distance.set( s, 0 );
        
        const minHeap = new MinHeap();
        minHeap.add(s, 0);
        
        while( minHeap.size ) {
            let current = minHeap.remove();
            // console.log(current)
            visited.add(current.node);
            for( let nNode of this.graph[current.node] ) {
                if( visited.has(nNode.to) ) continue;
                // console.log(nNode)
                
                let d = distance.get(`${nNode.to}`);
                let newD = distance.get(`${current.node}`) + nNode.w;
                
                if( newD < d ) {
                    distance.set( `${nNode.to}`, newD );
                    minHeap.add(`${nNode.to}`, nNode.w);
                }
            }
            
        }
        
        distance.delete(s);
        let max = Math.max( ...[ ...distance.values() ] )
        return max === MAX ? -1 : max;
    }
}

class HeapNode {
    constructor(node, val) {
        this.node = node;
        this.val = val;
    }
}

class MinHeap {
    constructor() {
        this.data = [];
        this.size = 0;
    }
    
    add(node, val) {
        this.data.push( new HeapNode(node, val) );
        let i = this.data.length-1;
        this.size++;
        
        while( i > 0 && this.data[i].val < this.data[getPI(i)].val ) {
            let temp = this.data[i];
            this.data[i] = this.data[getPI(i)];
            this.data[getPI(i)] = temp;
            i = getPI(i);
        }
        
        function getPI(i) {
            return Math.floor( (i-1)/2 );
        }
    }
    
    remove() {
        if( this.data.length === 0 )
            return null;
        
        this.size--;
        if( this.data.length === 1 )
            return this.data.pop();
        
        let min = this.data[0];
        let current = this.data.pop();
        let length = this.data.length, i = 0;
        this.data[0] = current;
        
        while(1) {
            let lCI = i*2+1, rCI = i*2+2;
            let swap = null;
            
            if( lCI < length && this.data[lCI].val < current.val )
                swap = lCI;
            
            if( rCI < length ) {
                if( ( !swap && this.data[rCI].val < current.val ) ||
                    ( swap && this.data[rCI].val < this.data[lCI].val ))
                swap = rCI
                
            }
            
            if( swap === null ) break
            
            this.data[i] = this.data[swap];
            this.data[swap] = current;
            i = swap;
        }
        
        return min;
    }
}