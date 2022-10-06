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
    let end = null, start = null;
    let map = new Map();
    
    let currentNode = head;
    while( currentNode ) {
        let node = new Node(currentNode.val, null, null)
        
        if( !start ) {
            start = node;
            end = node;
        } else {
            end.next = node;
            end = node;
        }
        
        map.set(currentNode, node);
        currentNode = currentNode.next;
    }
    
    currentNode = head;
    let node = start;
    while( currentNode ) {
        
        if( currentNode.random !== null ) {            
            node.random = map.get(currentNode.random);
        }
        
        node = node.next;
        currentNode = currentNode.next
    }
    
    return start
};

/*
[[7,null],[13,0],[11,4],[10,2],[1,0]]

{
 0: node,
 1:
}



*/