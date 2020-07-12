//recursive
var postorderTraversal = function(root) {
    let res = [];
    if (root === null) return res;
    helper(res, root);
    return res;
};

const helper = (res, root) => {
    if(root === null) return;
    helper(res, root.left);
    helper(res, root.right);
    res.push(root.val);
}

// not recursive
// 非遞歸實現二叉樹的後序遍歷
// 前序遍歷為 root -> left -> right，後序遍歷為 left -> right -> root。
// 可以修改前序遍歷成為 root -> right -> left，那麼這個順序就和後序遍歷正好相反
var postorderTraversal = function(root) {
    let ret = [];
    let stack = [];
    stack.push(root);
    while(stack.length > 0) {
        let node = stack.pop();
        if (node === null) continue;
        ret.push(node.val);
        stack.push(node.left);
        stack.push(node.right);
    }
    ret.reverse();
    return ret; 
};



// postorder
// void dfs(TreeNode root) {
//     dfs(root.left);
//     dfs(root.right);
//     visit(root);
// }
