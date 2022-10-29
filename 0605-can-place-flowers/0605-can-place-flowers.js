/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if( !n )
        return true;
    
    let count = 0;
    
    for( let i=0; i<flowerbed.length; i++ ) {
        if( flowerbed[i] === 0 && isPossibleToPlant(i) ){
            count++;
            flowerbed[i] = 1;
        }
        
        if( count >= n )
            return true;
    }
    
    return count >= n;
    
    function isPossibleToPlant(i) {
        if( i-1 >= 0 && flowerbed[i-1] === 1 )
            return false;
        
        if( i+1 < flowerbed.length && flowerbed[i+1] === 1 )
            return false;
        
        return true;
    }
};
/*

for bed of flowerbed

    if possible to plant  i-1 1+1
     plant 
        
    



*/