class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

def addNums(l1, l2):
    head = ListNode()
    cur = head
    carry = 0
    while l1 or l2 or carry:
        sum_val = carry
        if l1:
            sum_val += l1.value
            l1 = l1.next
        if l2:
            sum_val += l2.value
            l2 = l2.next
        carry, rem = divmod(sum_val, 10)
        cur.next = ListNode(rem)
        cur = cur.next
    return head.next

def printList(cur):
    while cur:
        print(cur.value, end=" -> ")
        cur = cur.next
    print("None")

# Testing
l1 = ListNode(3)
l1.next = ListNode(4)
l1.next.next = ListNode(2)
l2 = ListNode(5)
l2.next = ListNode(6)
l2.next.next = ListNode(4)
printList(l1)
printList(l2)
result = addNums(l1, l2)
printList(result)  # 8 -> 0 -> 7
