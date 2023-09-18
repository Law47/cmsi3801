class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.head = null
    }

    add(data) {
        const newNode = new TreeNode(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        this.addNode(this.head, newNode)
    }

    addNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode
            } else {
                this.addNode(node.left, newNode)
            }
        } else {
            if (!node.right) {
                node.right = newNode
            } else {
                this.addNode(node.right, newNode)
            }
        }
    }

    print() {
        if (!this.head) {
            console.log("Empty Tree")
            return
        }
        const queue = [this.head]
        while (queue.length) {
            const node = queue.shift()
            process.stdout.write(node.data + " ")
    
            if (node.left) {
                queue.push(node.left)
                process.stdout.write("Left: " + node.left.data + " ")
            }
    
            if (node.right) {
                queue.push(node.right)
                process.stdout.write("Right: " + node.right.data + " ")
            }
            console.log()
        }
    }

    
    checkBalanced(node) {
        if (node === null) {
            return 0;
        }
        const leftHeight = this.checkBalanced(node.left);
        if (leftHeight === -1) {
            return -1;
        }
        const rightHeight = this.checkBalanced(node.right);
        if (rightHeight === -1) {
            return -1;
        }
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

//Testing
const tree = new Tree()
tree.add(10)
tree.add(5)
tree.add(15)
tree.add(3)
tree.print()
console.log(tree.checkBalanced(tree.head) !== -1) //True

const unbalancedTree = new Tree()
unbalancedTree.add(4)
unbalancedTree.head.left = new TreeNode(7)
unbalancedTree.head.left.left = new TreeNode(11)
unbalancedTree.print()
console.log(unbalancedTree.checkBalanced(unbalancedTree.head) !== -1) //False