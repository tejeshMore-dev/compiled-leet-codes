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
    if( !list1 || !list2 )
        return !list1 ? list2 : list1
    
    let dummyNode = new ListNode(0);
    let pointer = dummyNode;
    
    while( list1 && list2 ) {
        if( list1.val <= list2.val ) {
            pointer.next = list1;
            pointer = list1;
            list1 = list1.next;
        } else {
            pointer.next = list2;
            pointer = list2;
            list2 = list2.next;
        }
                
        if( !list1 )
            pointer.next = list2;
        
        if( !list2 )
            pointer.next = list1;
    }
    
    return dummyNode.next;
};