/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let i=0;
    
    while(i < path.length) {
        let dir = findDir();
        if(!dir || dir === "" || dir === ".")
            continue;
        else if(  dir === "..") {
            if( stack.length )
                stack.pop()
        } else
            stack.push(dir)
    }
    
    function findDir() {
        let sb = [];
        while( i<path.length && path[i] === "/" ){
            i++
        };
        
        while( i<path.length && path[i] !== "/" ){
            sb.push(path[i]);
            i++
        };
        return sb.join("");
    }
    return stack.length ? "/"+stack.join("/") : "/"
};