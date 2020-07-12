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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    if(root === null) return res;
    let stack = [];
    let cur = root; //因為怕會改到原本root的結構
    while(cur !== null || stack.length > 0) {
        while (cur !== null) { // 右節點如果是null就不處理
            stack.push(cur);
            cur =  cur.left;
        }
        let node = stack.pop()
        res.push(node.val);
        cur = node.right;
    }
    return res;
};


