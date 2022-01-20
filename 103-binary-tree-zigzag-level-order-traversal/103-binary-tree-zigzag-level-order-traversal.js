/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    	let queue = [root], ans = [], oddFlag = false;

	while(queue[0]) {
		let qLength = queue.length, row = [];
		
		for( let i=0; i<qLength; i++ ) {
            let node = queue.shift();
            if( oddFlag ) {
                row[qLength - i - 1] = node.val;    
            } else {
                row[i] = node.val;    
            }

            if( node.left )
                queue.push(node.left)
            if(node.right)
                queue.push(node.right)
        }
        
        // row = flag ? row.reverse() : row;
		oddFlag = !oddFlag;
		ans.push( row );
}

	return ans;

};