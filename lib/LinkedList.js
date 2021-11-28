class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class LinkedList {
   constructor() {
      this.first = null;
      this.last = null;
   }

   insertFirst(value) {
      let node  = new Node(value);
      if (this.first === null) {
         this.first = node;
         this.last = node;
      }
      else {
         node.next = this.first;
         this.first = node;
      }
   }

   insertLast(value) {
      let node  = new Node(value);
      if (this.last === null) {
         this.first = node;
         this.last = node;
      }
      else {
         this.last.next = node;
         this.last = node;
      }
   }

   indexOf(value) {
      let index = 0;
      if (!this.first)
         return -1
      else {
         let currentNode = this.first;
         while ( currentNode !== null ) {
            if(currentNode.value === value)
               return index
            index++;
            currentNode = currentNode.next;
         }
         return -1
      }
   }

   contains(value) {
      if (!this.first)
         return -1
      else {
         let currentNode = this.first;
         while ( currentNode !== null ) {
            if(currentNode.value === value)
               return true
            currentNode = currentNode.next;
         }
         return -1
      }
   }

   print() {
      let currentNode = this.first;
      while ( currentNode !== null) {
         process.stdout.write(`${currentNode?.value} `);
         currentNode = currentNode.next;
      }
      process.stdout.write(`\n`);
      console.log({ first: this.first, last: this.last });
   }
}

module.exports = LinkedList;