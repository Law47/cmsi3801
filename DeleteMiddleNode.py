class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

def deleteNode(node):
    if node is None or node.next is None:
        return
    nextNode = node.next
    node.value = nextNode.value
    node.next = nextNode.next
    del nextNode

def printList(current):
    while current:
        print(current.value, end=" -> ")
        current = current.next

# Testing
a = ListNode('a')
b = ListNode('b')
c = ListNode('c')
d = ListNode('d')
e = ListNode('e')
f = ListNode('f')
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
print("Original:")
printList(a)
print()
deleteNode(c)
print("Deleted c:")
printList(a)