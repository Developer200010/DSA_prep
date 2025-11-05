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
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

inOrderTraversal(root);