/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let lp = 0, rp = height.length-1;
    
    while( lp < rp ) {
        let area = (rp-lp) * Math.min(height[lp], height[rp]);

        if( height[lp] > height[rp] )
            rp--
        else
            lp++
        
        res = Math.max(res, area);
    }
    
    return res;
};

/*
1*1 = 1
2*1 = 1

5*8 40
7*7  49


7*1 = 7


*/