/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let refMap = {}, inputMap = {  };
    let ref = "balloon";
    
    for(let char of ref){
        if( !refMap[char] )
            refMap[char] = 0;
        
        refMap[char] += 1;
    }
    
    for(let char of text) {
        if( !inputMap[char] )
            inputMap[char] = 0;
        
        inputMap[char] += 1;
    }
    
    let res = Number.MAX_VALUE;
    for(let char of ref){
        if( !inputMap[char] )
            return 0;
        
        let inst = Math.floor(inputMap[char] / refMap[char]);
        
        if( !inst)
            return 0
        res = Math.min(res, inst)
    }
    
    return res
};