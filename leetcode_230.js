var kthSmallest = function(root, k) {
    let cnt = 0;
    let val;
    
    function inOrder(node, k){
        if(node === null) return;
        inOrder(node.left, k);
        cnt++;
        if(cnt === k){
            val = node.val;
            return;
        }
        inOrder(node.right, k);        
    }
    inOrder(root, k);
    return val;
};
