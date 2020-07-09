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
var getMinimumDifference = function(root) {
    let output = [];
    // 初始設置最小差為最大
    let minDiff = Infinity;
    
    inOrderTraversal(root, output);
    
    for(let i = 1; i < output.length; i++){
        minDiff = Math.min(minDiff, output[i] - output[i - 1]);
    }
    
    
    function inOrderTraversal(root, output){
        if(root === null) return; // 回傳 
        
        inOrderTraversal(root.left, output);    //去看看left有沒有subtree or 具體的val
        output.push(root.val);
        inOrderTraversal(root.right, output);        
    }   
    
    return minDiff;
};
