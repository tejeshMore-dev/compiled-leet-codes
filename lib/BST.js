class BSTNode {
    constructor(value) {
        this.value = value;
        this.lChild = null;
        this.rChild = null;
    }
}

function BFSPrint () {
    console.log(JSON.stringify(root))
}

function preOrderPrint (node) {
    if (!node)    
    return 

    console.log(node.value);
    preOrderPrint(node.lChild);
    preOrderPrint(node.rChild);
}

function inOrderAscPrint (node) {
    if (!node)
        return

    inOrderAscPrint(node.lChild);
    console.log(node.value);
    inOrderAscPrint(node.rChild);
}

function inOrderDscPrint (node) {
    if (!node)
    return

    inOrderDscPrint(node.rChild);
    console.log(node.value);
    inOrderDscPrint(node.lChild);
}

function PostOrderPrint (node) {
    if (!node)
        return

    PostOrderPrint(node.lChild);
    PostOrderPrint(node.rChild);
    console.log(node.value);
}

class BST {
    constructor() {
        this.root = null;
        this.lChild = null;
        this.rChild = null
    }

    insert(value) {
        if (!this.root) {
            this.root = new BSTNode(value);
            return;
        }
        let node = this.root;
        let childName = null
        while (node) {
            childName = value < node.value ? 'lChild' : 'rChild';
            if (node[childName] === null) {
                node[childName] = new BSTNode(value);
                return;
            }
            else
                node = node[childName];
        }
    }

    find (value) {
        let node = this.root;
        let childName = null;

        while (node) {
            if (node.value === value) {
                return node
            }
            childName = value < node.value ? 'lChild' : 'rChild';
            node = node[childName];
        }
        return false;
    }
    
    findDepth(node) {
        if (node.lChild === null && node.rChild === null)
            return 0

        return (1 + Math.max(this.findDepth(node.lChild), this.findDepth(node.rChild)))
    }

    findHeight(node) {
        if (node.lChild === null && node.rChild === null)
            return 0

        return (1 + Math.max(this.findHeight(node.lChild), this.findHeight(node.rChild)))
    }

    print(type = 'IN_ORDER_ASC') {
        switch (type) {
            case 'BFS':
                BFSPrint(this.root); 
                break;

            case 'PRE_ORDER':
                console.log("logging 'PRE_ORDER'");
                preOrderPrint(this.root);
                break;

            case 'IN_ORDER_ASC':
                console.log("logging 'IN_ORDER_ASC'");
                inOrderAscPrint(this.root);
                break;

            case 'IN_ORDER_DSC':
                console.log("logging 'IN_ORDER_DSC'");
                inOrderDscPrint(this.root);
                break;

            case 'POST_ORDER':
                console.log("logging 'POST_ORDER'");
                PostOrderPrint(this.root);
                break;
        }
    }
}

module.exports = BST;
