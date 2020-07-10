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
var findSecondMinimumValue = function(root) {
    // dfs 找第二小的數值
    // 因為這個樹的結構特殊, 所以找到的第2個不一樣的值就是第二小的數值
    // 如果是null return -1
    if(root === null) return -1;
    let minVal = root.val;
    let result = Infinity;
    
    let dfs = (root) => {
        if(!root) return;
        
        if(root.val === minVal){
            dfs(root.left);
            dfs(root.right);
        } else if (root.val > minVal && result > root.val ){
            result = root.val;    
        }
    }
    dfs(root);
    return result === Infinity ? -1 : result;
};

// ----------------------------
//     
//     '2
//-1 L /  \ R
//   '2   '2
//       /   \
//      '2     5
//     / \    / \
//   '2   4   5   5
//           / \ / \
//           5    6
