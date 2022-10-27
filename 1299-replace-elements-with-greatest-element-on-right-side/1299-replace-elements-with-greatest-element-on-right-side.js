/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -1;
    
    for( let i=arr.length-1; i>=0; i-- ) {
        let temp = max;
        max = Math.max(max, arr[i]);
        arr[i] = temp
    }
    
    return arr;
};
/*
18
[18,6,6,6,1,-1]
O(1)
res = [ 18 18 6 6 6 1 -1 ]
*/