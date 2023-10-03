class Stack:
    def __init__(self, cap):
        self.stack = []
        self.cap = cap

    def isFull(self):
        return len(self.stack) == self.cap

    def push(self, item):
        if not self.isFull():
            self.stack.append(item)

    def pop(self):
        if self.stack:
            return self.stack.pop()

class SetOfStacks:
    def __init__(self, stackCap):
        self.stacks = []
        self.stackCap = stackCap

    def push(self, item):
        if not self.stacks or self.stacks[-1].isFull():
            newStack = Stack(self.stackCap)
            newStack.push(item)
            self.stacks.append(newStack)
        else:
            self.stacks[-1].push(item)

    def pop(self):
        popped = self.stacks[-1].pop()
        if not self.stacks[-1].stack:
            self.stacks.pop()
        return popped

    def popAt(self, index):
        return self.stacks[index].pop()


# Testing
test = SetOfStacks(stackCap=3)
test.push(1)
test.push(2)
test.push(3)
test.push(4)
test.push(5)
print(test.pop())  # 5
print(test.popAt(0))  # 3
