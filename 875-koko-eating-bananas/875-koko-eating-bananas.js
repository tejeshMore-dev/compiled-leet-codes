/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let lp = 1, rp = Math.max( ...piles );
    let res = rp;
    
    while( lp <= rp ) {
        let k = Math.floor( lp + (rp-lp)/2 );
        let hrReq = 0;
        
        for( let pile of piles ) {
            hrReq += Math.ceil(pile/k);
        }
        
        if( hrReq > h ) {
            lp = k+1;
        } else {
            res = Math.min(res, k);
            rp = k-1;
        }
    }
    
    return res;
};