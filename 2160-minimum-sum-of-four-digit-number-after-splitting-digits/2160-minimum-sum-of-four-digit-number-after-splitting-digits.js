/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let n = [], i = 0;
    
    while( num ) {
        n[i++] = num%10;
        num = Math.floor(num/10)
    }
    
    n.sort();
    
    return ( Number(n[0]) * 10 + Number(n[3]) ) + ( Number(n[1]) * 10 + Number(n[2]) )
    console.log(n)
};

/*
2932





*/













