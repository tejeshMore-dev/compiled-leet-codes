/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

var findCheapestPrice = function(n, flights, src, dst, k) {
    let prices = new Array(n);
    const MAX = Number.MAX_VALUE;
    for( let i=0; i < n; i++ ) {
        prices[i] = MAX;
    }
    prices[src] = 0;
    
    for( let stop=0; stop<=k; stop++  ) {
        let tempPrices = [ ...prices ];
        for( let flight of flights ) {
            let [ s, d, p ] = flight;
            if( prices[s] === MAX )
                continue;

            if( prices[s] + p < tempPrices[d] )
                tempPrices[d] = prices[s] + p;
        }
        prices = [  ...tempPrices ];
    }
    
    return prices[dst] === MAX ? -1 : prices[dst]
};