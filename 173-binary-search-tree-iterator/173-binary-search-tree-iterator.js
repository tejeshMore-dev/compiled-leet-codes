/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    let stack = [],node= root;
    this.ans = [];
    
    while( stack[0] || node ) {
        while (node) {
            stack.push(node);
            node = node.left
        }
        
        node = stack.pop();
        this.ans.push(node.val);
        node = node.right;
    }
    this.pointer = 0;
    this.length = this.ans.length;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.ans[this.pointer++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.pointer < this.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */




















