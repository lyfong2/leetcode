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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let nums = [];
    inOrder(root, nums);
    let i = 0, j = nums.length - 1;
    
    while(i < j) {
        let sum = nums[i] + nums[j];
        if(sum === k) return true;
        
        if(sum < k){
            i++;
        } else {
            j--;
        }
    }    
    return false;    
};

const inOrder = (root, nums) => {
    if (root === null) return;
    inOrder(root.left, nums);
    nums.push(root.val);
    inOrder(root.right, nums);
}


// 使用中序遍历得到有序数组之后
// nums: [2, 3, 4, 5, 6, 7]
//        i 
//                       j
// 再利用双指针对数组进行查找。

