/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if( !head || !head.next || !head.next.next )
        return head

    let sp = head;
    let fp = head;

    while( sp && sp.next && fp.next && fp.next.next ) {
        sp = sp.next;
        fp = fp.next.next
    }

    //reverse second half
    let node = sp.next;
    let prev = null;
    while( node ) {
        let temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    } 

    sp.next = null;
    let startP = head;
    let endP = prev;
    while( startP && endP  ) {
        let temp1 = startP.next;
        let temp2 = endP.next;

        startP.next = endP;
        endP.next = temp1;

        startP = temp1;
        endP = temp2;	
    }
	

	return head;
};


