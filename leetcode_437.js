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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (root === null) return 0;
    // root + left + right
    // 這樣它就可以實現一個遞規的要求
    // dfs() 
    
    return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
    // 需要把所有的可能性都去涵蓋

    
}


// 用來統計數量
const dfs = (root, sum) => {
    // 遞規的出口
    if(root === null) return 0;

    sum -= root.val;
    // root + left + right
    // return 三個情況之合
    return (sum === 0 ? 1 : 0) + dfs(root.left, sum) + dfs(root.right, sum);
    //當前我這個root 是否滿足條件, current sum is equal zero
    // 如果sum = 0 就代表我們找到想要的路徑
    // 滿足條件就是1 把count加進去
}

// 1. 不需要是root node & leaf node為結尾, if(root.left === null && root.right === null)
// 2. 獲取number , 不僅僅判斷存在 

