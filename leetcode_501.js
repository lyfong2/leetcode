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
 * @return {number[]}
 */
var findMode = function(root) {
    let currVal = null;
    let currCount = 0;
    let maxCount = 0;
    let modeCount = 0;
    let modes = [];
    
    // 中序
    const inorder = node => {
        if(!node) return;
        inorder(node.left);
        handleValue(node.val);
        inorder(node.right);
    }
    // 這是處理root.val的
    const handleValue = val => {
        // handle current count
        if (val !== currVal) {
            currVal = val;
            currCount = 0;
        }
        currCount++;

        if (currCount > maxCount) {
            // found a new mode
            maxCount = currCount;
            modeCount = 1;          
            modes[0] = currVal;     
        } else if (currCount === maxCount){
            // found a mode with same count
            modes[modeCount] = currVal;
            modeCount++;
        }
    };
   
    inorder(root);
    
    
    return modes.slice(0, modeCount);
};



/*
      1
      /\
    -1  2
        /\
       2  3
          /\
         3  4
    A = [-1 1 2 2 3 3 4]
    return [2 , 3]
    
    
    * 中敘完之後, 會得到一個排序過後的一個array
    * 當前訪問的element, 是否跟它前面的值是否相同, 如果相同, 這個的count + 1
    * 設定一個max count, 每個element的count比較後, 要比較現有的node如果Max count換element
    * 如果有多個Max count Node它們的counts是相同的, 將他們裝在同一個array回傳
      
*/
