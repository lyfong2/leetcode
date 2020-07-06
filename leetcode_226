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
 * @return {TreeNode}
 */
// Recursive
var invertTree = function(root) {
    if (root === null) return root;
    
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;    
};

// BFS
var invertTree = function(root) {
    if (root === null) return root;    
    let queue = [root];
    
    while (queue.length > 0) {
        // [1,2,3] -> [2,3]
        const node = queue.shift(); // use pop() then DFS, use shift() BFS
        
        // swap, Destructuring assignment
        [node.left, node.right] = [node.right, node.left];
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return root;
};
