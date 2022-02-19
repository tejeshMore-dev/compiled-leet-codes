/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let MAX = 5;
    let map = {};
    let ans = [];
    
    items.sort((a, b) => b[1] - a[1]);
    
    for( let i=0; i < items.length; i++ ) {
        let [ id, score ] = items[i];
        if( !map[id] )
            map[id] = { score: 0, c:0 }
        
        if( map[id].c < MAX ) {
            map[id].score += score;
            map[id].c = map[id].c + 1;
        }
    }
    // console.log(map)
    for( let id in map ) {
        let average = Math.floor(map[id].score/MAX);
        ans.push([id, average]);
    }
    
    return ans;
};