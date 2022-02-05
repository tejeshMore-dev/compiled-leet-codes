// const LinkedList = require("./LinkedList");

class Node {
    constructor(val) {
        this.val = val;
        this.neighbors = new Array();
    }
}

function dfs(node, visited) {
    process.stdout.write(`${node.val}, `);
    visited[node.val] = 1;
    for( let i = 0; i < node.neighbors.length; i++ ) {
        if( !visited[node.neighbors[i].val] ) {
            dfs(node.neighbors[i], visited)
        }
    }
}

function bfs(node) {
    let queue = [ node ], visited = {};

    while( queue.length > 0 ) {
        let node = queue.shift();
        process.stdout.write(`${node.val}, `);
        visited[node.val] = 1;

        for( let n of node.neighbors) {
            if( !visited[n.val] ) {
                visited[n.val] = 1;
                queue.push(n);
            }
        }
    }
}

class Graph {
    constructor() {
        this.nodes = {};        
    };

    addNode(label) {
        if (this.nodes[label])
            return
        
        this.nodes[label] = new Node(label)
    }

    removeNode(label) {

    }

    addEdge(from, to) {
        if( !this.nodes[from] )
            return

        if(!this.nodes[to])
            return

        this.nodes[from].neighbors.push(this.nodes[to]);
    }

    removeEdge(from, to) {
        // if( !this.nodes[from] )
        //     return

        // if(!this.nodes[to])
        //     return

        // this.nodes[from].neighbors.delete(to)
    }

    print() {
        for( let node in this.nodes ) {
            process.stdout.write(`${this.nodes[node].val} >>`);
            let neighbors = this.nodes[node].neighbors
            for( let i = 0; i < neighbors.length; i++ ) {
                process.stdout.write(`${neighbors[i].val} >>`);
            }
            console.log("")
        }
    }

    dfs(label) {
        process.stdout.write(`${label} DFS>> `);
        dfs(this.nodes[label], {})
        console.log("")
    }

    bfs(label) {
        process.stdout.write(`${label} BFS>> `);
        bfs(this.nodes[label], this.nodes)
        console.log("")
    }
}


module.exports = Graph;

