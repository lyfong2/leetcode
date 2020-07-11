// 使用Preorder前序: (Root, Left, Right) : 1 2 4 5 3
// pre-order traversal
var preorderTraversal = function(root) {    
    let res = [];
    let stack = [root];
    
    while(stack.length > 0){
        let node = stack.pop();
        if(node === null) continue;
        res.push(node.val);
        if(node.right !== null) stack.push(node.right);
        if(node.left !== null) stack.push(node.left);        
    }
    return res;
};


// recursive
var preorderTraversal = function(root) {    
    let res = [];
    if(root === null) return res;
    helper(res, root);
    return res;
};

const helper = (res, root) => {
    if (root === null) return;
    res.push(root.val);
    helper(res, root.left);
    helper(res, root.right);
}
