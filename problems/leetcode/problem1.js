var BST  = require('../../lib/BST');

function execute () {
    let tree = new BST();
    tree.insert(20);
    tree.insert(10);
    tree.insert(30);

    tree.insert(6);
    tree.insert(14);
    tree.insert(8);

    tree.insert(3);
    tree.insert(24);
    tree.insert(26);

    tree.print('PRE_ORDER');
    tree.print('POST_ORDER');
    tree.print('IN_ORDER_ASC');
    tree.print('IN_ORDER_DSC');
}

module.exports.execute = execute ;
