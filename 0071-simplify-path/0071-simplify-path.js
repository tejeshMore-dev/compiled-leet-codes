/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    path = path.split("/");
    
    for( let dir of path ) {
        if(!dir || dir === "" || dir === ".")
            continue;
        else if( dir === "..") {
            if( stack.length )
                stack.pop()
        } else
            stack.push(dir)
    }
    
    return stack.length ? "/"+stack.join("/") : "/"
};