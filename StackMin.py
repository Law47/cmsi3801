class Stack:
    def __init__(self):
        self.dataStack = []  
        self.minStack = []   

    def push(self, val):
        self.dataStack.append(val)
        if not self.minStack or val <= self.minStack[-1]:
            self.minStack.append(val)

    def pop(self):
        if self.dataStack:
            if self.dataStack[-1] == self.minStack[-1]:
                self.minStack.pop()
            return self.dataStack.pop()

    def min(self):
        if self.minStack:
            return self.minStack[-1]
        return None

# Testing
stack = Stack()
stack.push(3)
print("Minimum element:", stack.min())  # 3
stack.push(5)
print("Minimum element:", stack.min())  # 3
stack.push(2)
print("Minimum element:", stack.min())  # 2
stack.push(1)
print("Minimum element:", stack.min())  # 1
stack.pop()
print("Minimum element after pop:", stack.min())  # 2
