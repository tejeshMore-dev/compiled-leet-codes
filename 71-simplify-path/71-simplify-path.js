/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    
    path = path.split("/");
    
    for( let dir of path ) {
        if( dir === "" || dir === "." || (dir === ".." && stack.length === 0) )
            continue;
        
        if( dir === ".." )
            stack.pop();
        else
            stack.push(dir);
    }
    
    return "/"+stack.join("/")
};