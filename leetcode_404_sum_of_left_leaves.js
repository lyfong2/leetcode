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
var sumOfLeftLeaves = function(root) {
    var val = 0;
    
    if(!root) {
        return 0;
    }


    // 這是左邊, 並且它是葉子, 也就是這個左節點沒有接下來的節點了
    if (root.left && !root.left.left && !root.left.right) {
        //回傳左邊的值
        val = root.left.val;
    }
    return val + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

