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
var findBottomLeftValue = function(root) {
    let queue = [];
    queue.push(root);
    while(queue.length > 0){
        root = queue.shift();
        if(root.right !== null) queue.push(root.right);
        if(root.left !== null) queue.push(root.left);
    }
    return root.val;
};

// Example 1:
// 1. queue是先進先出
// queue: []

// 2. 裝進第一層root
// queue: [2]

// 3. 取出處理, 這邊是從第一筆資料拿
// queue: []
// root : 2

// 4. 同一層的都是放進queue
// queue: [3, 1]

// 5. 拿出3
// queue: [1]
// root: 3

// 6. 拿出1
// queue: []
// root: 1

// 7. output: 1
