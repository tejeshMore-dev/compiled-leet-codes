/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set();
    
    for( let email of emails ) {
        let actualEmail = findActualEmail(email);
        if( !set.has(actualEmail) )
            set.add(actualEmail);
    }
    
    return set.size;
    
    function findActualEmail(email) {
        let i=0;
        let sb = [];
        
        while( email[i] !== "@" ) {
            if( email[i] === "+" ) {
                  while(  email[i] !== "@" ) {
                      i++;
                  } 
                break
            } else if( email[i] !== "." )
                sb.push(email[i]);
            
            i++;
        }
        
        while( i<email.length ) {
            sb.push(email[i]);
            i++;
        }
        return sb.join("");
    }
};