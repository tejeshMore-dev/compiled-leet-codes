/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map();
    
    let node = head;
    while( node ) {
        map.set( node, new Node(node.val) );
        node = node.next;
    }
    
    node = head;
    while( node ) {
        let clonedNode = map.get(node);
        if( clonedNode ) {
            clonedNode.next = (node.next ? map.get(node.next) : null);
            clonedNode.random = (node.random ? map.get(node.random) : null);   
        }

        node = node.next;
    }
    
    return map.get(head)
};
