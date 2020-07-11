var averageOfLevels = function(root) {
    let queue = [];
    let result = [];
    queue.push(root); //其實裝進去的只有一個root 3, 不是一整串tree都裝進去
    
    while(queue.length > 0){
        let queueSize = queue.length;   // 其實是一層的length, 例如第一層只有一
        
        let sum = 0;
        for(let i = 0; i < queueSize; i ++){
            node =  queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            sum += node.val
        }
        
        result.push(sum/queueSize);
    }
    
    return result
};


