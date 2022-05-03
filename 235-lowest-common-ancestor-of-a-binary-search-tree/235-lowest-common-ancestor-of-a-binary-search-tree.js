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
/*
solutions is very simple if you observe  p & q values carefully.

if both values(p,q) are lesser or greater than current parent node then you have to either go to left or left respectively
or else current node is your answer.
*/

/*
var lowestCommonAncestor = function(root, p, q) {
    let queue = [root];
 
    while( queue[0] ) {
        root = queue.shift();
        
        if( p.val < root.val && q.val < root.val )
            queue.push(root.left)
        else if( p.val > root.val && q.val > root.val )
            queue.push(root.right)
        else
            break
            
    }
    
    return root
};
*/  

// /*
var lowestCommonAncestor = function(root, p, q) {
    if( p.val < root.val && q.val < root.val  )
        return lowestCommonAncestor( root.left, p , q );
    
    if( p.val > root.val && q.val > root.val  )
        return lowestCommonAncestor( root.right, p , q );
    
    return root
};
// /*

/*





traverseDFS  





p  & q  << node.val
    go left

p & q  >>> node.val
    go right

else
    ans  >>> node.val































*/