/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans= [], rp =s.length-1;
    findWord();
    return ans.join(" ");
    
    function findWord() {
        if( rp < 0 )
            return 

        while( s[rp] === " " &&  rp >= 0 )
            rp--

          if( rp < 0 )
            return 

        let  end = rp+1;
        while( s[rp] !== " " && rp >= 0 ) {
            rp--
        }
        let start = rp+1
        ans.push(s.substring(start, end));
        findWord();    
    }
};



/*

ans=[]
rp = s.length-1;

findWord(  ) {
    if( rp < 0 )
        return 
        
    while( s[rp] === " " &&  rp >= 0 )
        rp--
    
      if( rp < 0 )
        return 
        
    let  end = rp;
    while( s[rp] !== " " && rp >= 0 ) {
        rp--
    }
    let start = rp+1
    ans.push(s.substring(start, end+1));
    findWord();
}

return ans.join(" ");



















return ans.join(" ");










*/





































