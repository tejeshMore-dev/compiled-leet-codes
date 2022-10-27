/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if( numRows === 1 )
        return [[1]];
    
    if( numRows === 2 )
        return [[1], [1,1]];
    
    let res = [[1], [1,1]];
    numRows = numRows - 2;
    
    while( numRows ) {
        let temp = [ 1 ];
        let last = res[res.length-1];
        let i=0;
        
        while( i+1 < last.length ) {
            temp.push(last[i]+last[i+1]);
            i++;
        }
        
        temp.push(1);
        res.push([ ...temp ]);
        numRows--;
    }
    
    return res;
};
/*
5
[1]
[1 1]


[1 2 1]
[1 3 3 1]
[ 1 4 6 4 1 ]
*/