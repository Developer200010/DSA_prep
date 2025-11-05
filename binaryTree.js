class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node){
    if(node == null){
        return;
    }

    inOrderTraversal(node.left);
    console.log(node.data);
    inOrderTraversal(node.right);
}

function preOrderTraversal(node){
    if(node == null){
        return;
    }
    console.log(node.data);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
}

function postOrderTraversal(node){
    if(node == null){
        return;
    }
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.data);
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// inOrderTraversal(root);/
// preOrderTraversal(root)
postOrderTraversal(root)