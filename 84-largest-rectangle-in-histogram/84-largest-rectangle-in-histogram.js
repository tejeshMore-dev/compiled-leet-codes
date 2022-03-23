/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let len = heights.length;
    let leftMin = new Array(len);
    let rightMin = new Array(len);
    
    let stack = [];
    
    // fill leftMin
    for( let i=0; i < heights.length; i++ ) {
        let h = heights[i];
        
        while( stack.length > 0 && heights[stack[stack.length-1]] >= h ) {
            stack.pop();
        }
        leftMin[i] = stack.length === 0 ? 0 : stack[stack.length-1] + 1
        stack.push(i);
    }
    
    stack = [];
    
    // fill rightMin
    for( let i=heights.length-1; i >= 0; i-- ) {
        let h = heights[i];
        
        while( stack.length > 0 && heights[stack[stack.length-1]] >= h ) {
            stack.pop();
        }
        rightMin[i] = stack.length === 0 ? len-1 : stack[stack.length-1] - 1
        stack.push(i);
    }
    
    let maxArea = 0;
    
    for( let i=0; i < heights.length; i++ ) {
        let area = ( rightMin[i] - leftMin[i] + 1 ) * heights[i]
        maxArea = Math.max( area, maxArea );
    }
    
    return maxArea;
};