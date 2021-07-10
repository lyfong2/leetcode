
// creating test case -------------------------start
function TreeNode(val, left, right){
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

let node = new TreeNode(4);
node.left = new TreeNode(2);
node.right = new TreeNode(7);
node.left.left = new TreeNode(1);
node.left.right = new TreeNode(3);
node.right.left = new TreeNode(6);
node.right.right = new TreeNode(9);
// [4,2,7,1,3,6,9]


// creating test case -------------------------end


// Recursive
var invertTree = function(root) {
  if (root === null) return root;
  
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

// [4,7,2,9,6,3,1]
invertTree(node);

// print test case -------------------------
var queue = [invertTree(node)];
let level = function(){
  while(queue.length !== 0){
    for(let i = 0; i < queue.length; i++ ){    
      temp = queue.shift();
      console.log(temp.val);
      if(temp.right)queue.push(temp.right);
      if(temp.left)queue.push(temp.left);
    }
  }
}
level();
