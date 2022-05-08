/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let nextNode = node.next;
    node.val = nextNode ? nextNode.val : nextNode;
    node.next = nextNode ? nextNode.next : nextNode; 
};