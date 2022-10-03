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
    let length = 0;
    
    let currentNode = head;
    while( currentNode ) {
        length++;
        currentNode = currentNode.next;
    }
    
    let mid = Math.ceil(length/2);
    
    let count = mid-1;
    currentNode = head;
    while( count ) {
        currentNode = currentNode.next;
        count--;
    }
    
    let temp = currentNode.next;
    currentNode.next = null;
    
    let prev = null;
    currentNode = temp;
    while(currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = prev
        
        prev = currentNode;
        currentNode = nextNode;
    }
    
    let l = head, r = prev; 
    let dummyNode = new ListNode(-1)
    
    if(!r)
        return l;
    
    currentNode = dummyNode;
    while( l && r ) {
        let temp1 = l.next;
        let temp2 = r.next;
        
        currentNode.next = l;
        currentNode = l;
        currentNode.next = r
        currentNode = r;
        
        l = temp1;
        r = temp2;
        
        if(!r)
            currentNode.next = l;
    }
    
    return dummyNode.next;
};
/*
[1,2,3,4]
 0 1 2 3
5
p1 3
p2 2

length
l
p1 = l1/2 ceil
p1 node ignore

reverse remaining
r

l && r
curren > l > r
current = r;

l >> l.next
r >> r.next

if(!r)
current > l


dumm.next
*/