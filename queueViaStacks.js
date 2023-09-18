class StackNode {
    constructor(data, parent) {
        this.data = data
        this.parent = parent
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        let node = new StackNode(data)
        node.parent = this.top
        this.top = node
    }

    pop() {
        if (this.isEmpty()) {
            return "Empty"
        } 
        let data = this.top.data
        this.top = this.top.parent
        return data
    }

    peek() {
        return this.top.data
    }

    isEmpty() {
        if (this.top == null) {
            return true
        }
        return false
    }
}

class Queue {
    constructor() {
        this.mainStack = new Stack()
        this.tempStack = new Stack()
    }

    add(data) {
        while (!this.mainStack.isEmpty()) {
            this.tempStack.push(this.mainStack.pop())
        }
        this.mainStack.push(data)
        while (!this.tempStack.isEmpty()) {
            this.mainStack.push(this.tempStack.pop())
        }
    }

    remove() {
        return this.mainStack.pop()
    }

    peek () {
        return this.mainStack.peek()
    }

    isEmpty () {
        if (this.mainStack.isEmpty) {
            return true
        }
        return false
    }
}

//Testing Stack
console.log("Stack Testing:")
let stack = new Stack()
stack.push("a")
stack.push("b")
stack.push("c")
stack.push("d")
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
//Testing Queue
console.log("Queue Testing:")
let queue = new Queue()
queue.add("a")
queue.add("b")
queue.add("c")
queue.add("d")
console.log(queue.peek())
console.log(queue.remove())
console.log(queue.remove())
console.log(queue.isEmpty())
console.log(queue.remove())
console.log(queue.remove())
console.log(queue.remove())