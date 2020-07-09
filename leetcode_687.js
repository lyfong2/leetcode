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
 * @return {number}
 */
var longestUnivaluePath = function(root) {    
    const dfs = (root) => {
        if(root === null) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        let leftPath = (root.left !== null && root.left.val === root.val) ? left + 1 : 0;
        let rightPath = (root.right !== null && root.right.val === root.val) ? right + 1 : 0;
        
        path = Math.max(path, leftPath + rightPath);
        return Math.max(leftPath, rightPath);        
    }
    
    
    let path = 0;
    dfs(root);
    
    return path;
    
};
