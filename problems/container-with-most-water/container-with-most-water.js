/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let lp = 0;
    let rp = height.length-1;
    let result = 0;
    
    while( lp < rp ) {
        let area = findArea( rp-lp, Math.min(height[lp],height[rp]) )
        result = Math.max(result, area);
        
        if( height[lp] <= height[rp] )
            lp ++
        else
            rp--
    }
    
    return result
    
    function findArea( width, height ) {
        return width*height; 
    }
};