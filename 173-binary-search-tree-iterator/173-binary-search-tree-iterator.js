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
    this.stack = [];
    this.pushAll(root);
};

BSTIterator.prototype.pushAll = function(node) {
    while( node ) {
        this.stack.push(node);
        node = node.left;
    }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let node = this.stack.pop();
    this.pushAll(node.right)
    return node.val
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */




















