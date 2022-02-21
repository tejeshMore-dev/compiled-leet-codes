/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const graph = new Graph(equations, values);
    console.log(_graph)
    let ans = [];
    for (let query of queries) {
        let [s, e] = query;
        ans.push(graph.dfs(s, e))
    }
    return ans;
}

var _graph;
class Graph {
    constructor(edges, weight) {
        _graph = {};

        for (let i = 0; i < edges.length; i++) {
            let [s, e] = edges[i];
            if (!_graph[s])
                _graph[s] = [];
            if (!_graph[e])
                _graph[e] = [];

            _graph[s].push({
                val: weight[i],
                label: e
            });
            _graph[e].push({
                val: 1 / weight[i],
                label: s
            });
        }
    }




    dfs(s, e, visited) {
        if (!_graph[s] || !_graph[e])
            return -1.0;
        if (s === e)
            return 1.0;

        return _dfs(s, e, {});
    }
}

function _dfs(s, e, visited) {
    if (s === e)
        return 1.0

    visited[s] = 1;
    console.log(s)
    for (let nNode of _graph[s]) {
        if (!visited[nNode.label]) {
            let ans = _dfs(nNode.label, e, visited);
            if (ans !== -1)
                return ans * nNode.val
        }
    }
    return -1.0
}