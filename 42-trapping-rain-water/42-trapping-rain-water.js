/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let length = height.length;
    let leftMax = new Array(height.length);
    let rightMax = new Array(height.length);
    let result = 0;
    
    leftMax[0] = height[0];
    for( let i=1; i < height.length; i++ ) {
        leftMax[i] = Math.max(height[i], leftMax[i-1]);
    }
    
    rightMax[length-1] = height[length-1];
    for( let i=length-2; i >= 0; i-- ) {
        rightMax[i] = Math.max(height[i], rightMax[i+1]);
        
    }
    
    for( let i in height ) {
        let h = height[i];
        let ans = Math.min( leftMax[i], rightMax[i] ) - h
        if( ans > 0 ){
            result += ans;
        }        
    }
    
    return result;
};