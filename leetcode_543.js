var diameterOfBinaryTree = function(root) {
    const depth = (root) => {
        if (root === null) return 0;
        
        let leftDepth = depth(root.left);
        let rightDepth = depth(root.right);
        max = Math.max( max , leftDepth + rightDepth);        
        
        return Math.max(leftDepth, rightDepth) + 1;
    }
    
    let max = 0;
    depth(root);
    
    return max;
};
