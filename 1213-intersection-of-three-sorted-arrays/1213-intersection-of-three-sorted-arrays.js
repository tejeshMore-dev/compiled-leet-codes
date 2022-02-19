/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let p1 = 0, p2 = 0, p3 = 0;
    let ans = [];
    
    while( p1 < arr1.length && p2 < arr2.length && p3 < arr3.length ) {
        let min = Math.min(arr1[p1], arr2[p2], arr3[p3]);
        
        if( arr1[p1] === min && arr2[p2] === min && arr3[p3] === min ) {
            ans.push(arr1[p1]);
        }        
        
        if( arr1[p1] === min )
            p1++;
        
        if( arr2[p2] === min )
            p2++;
        
        if( arr3[p3] === min )
            p3++;
    }
    
    return ans;
};