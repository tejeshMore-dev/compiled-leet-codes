/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if( !list1 )
        return list2;
    
    if( !list2 )
        return list1;
    
    let dummyNode = new ListNode(-1);
    let currentNode = dummyNode;
    let l1 = list1, l2 = list2;
    
    while( l1 && l2 ) {
        if( l1.val <= l2.val ) {
            currentNode.next = l1;
            currentNode = l1;
            l1 = l1.next;
        } else {
            currentNode.next = l2;
            currentNode = l2;
            l2 = l2.next;
        }
        
        if( !l1 )
            currentNode.next = l2;
        
        if( !l2 )
            currentNode.next = l1;        
    }
    
    return dummyNode.next;
};
/*
list1 = [1,2,4], list2 = [1,3,4,5, 6]


1 1 2 3 4 4
*/