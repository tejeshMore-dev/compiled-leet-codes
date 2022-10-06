/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let frMap = {};
    let map = {};
    let frs = [];
    let res = [];
    
    for( let num of nums ) {
        if( !map.hasOwnProperty(num) )
            map[num] = 0;
        
        let fr = map[num] + 1;
        map[num] = fr;      
    }
    
    for( let key in map ) {
        frs.push([key, map[key]]);
    }
    

    frs.sort((a, b) => a[1]-b[1]);
    
    while(k--) {
        res.push(frs.pop()[0]);
    }
    return res;
};
/*
1:3
2:2
3:1


1:[ 3 ]
2:[2]
3:[1]
 


*/