/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return helper( root );
    
    function helper( node ) {
        if( !node )
            return null;
                
        let leftD = helper(node.left);
        let rightD = helper(node.right);
        
        if( leftD && rightD )
            return node
        
        if( node.val === p.val || node.val === q.val )
            return node.val === p.val ? p : q
        
        if( leftD || rightD )
            return leftD ? leftD : rightD
        
        return null;  
    }
    
//     let path1 = [], path2 = [];
    
//     helper( root, [] );
    
//     let min = Math.min( path1.length, path2.length )
    
//     for( let i = 0; i < min; i++ ) {
//         if( path1[i].val !== path2[i].val )
//             return path1[i-1]
//     }
    
//     return path1[min-1];
    
//     function helper( node, nodes ) {
//         if( !node )
//             return 
        
//         if( node.val === p.val )
//             path1 = [ ...nodes, node ]
        
//         if( node.val === q.val )
//             path2 = [ ...nodes, node ]
        
//         helper( node.left, [ ...nodes, node ] )
//         helper( node.right, [ ...nodes, node ] );
//     }
    
};