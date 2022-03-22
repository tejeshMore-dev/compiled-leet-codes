/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let edges = new Set();
    
    for( let connection of connections ) {
        let [ s, d ] = connection;
        edges.add( `${s}-${d}` ); // s --> d
    }
    
    const cityGraph = {};
    for( let connection of connections ) {
        let [ s, d ] = connection;
        if( !cityGraph[s] )
            cityGraph[s] = [];
        
        if( !cityGraph[d] )
            cityGraph[d] = [];
        
        cityGraph[s].push(d);
        cityGraph[d].push(s);
    }
    
    let changes = 0;
    dfs(0, new Set())
    return changes;
    
    function dfs(city, visited) {
        visited.add(city);
        for( let nCity of cityGraph[city] ) {
            if( visited.has(nCity) )
                continue;
            
            if( !edges.has(`${nCity}-${city}`) ) // s --> d
                changes++;
            dfs( nCity, visited )
        }
    }
};