function palindrome(list) { 
    let str = ""
    let cur = list.head
    let size = list.size/2
    let odd = false
    if (list.size % 2 == 1) {
        size -= 0.5
        odd = true
    }
    for (let i = 0; i < size; i++) {
        str += cur.data
        cur = cur.next
    }
    if (odd) {
        cur = cur.next
    }
    for (let i = size - 1; i >= 0; i--) {
        if (cur.data != str.charAt(i)) {
            return false
        }
        cur = cur.next
    }
    return true
}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor(str) {
        str = String(str)
        this.size = 1
        this.head = new ListNode(str.charAt(0))
        let cur = this.head;
        for (let i = 1; i < str.length; i++) {
            this.size++
            cur.next = new ListNode(str.charAt(i))
            cur = cur.next
        }
    }
}

//Testing
let list = new LinkedList("tacocat")
console.log(palindrome(list)) //True
list = new LinkedList("racecar")
console.log(palindrome(list)) //True
list = new LinkedList("n")
console.log(palindrome(list)) //True
list = new LinkedList("")
console.log(palindrome(list)) //True
list = new LinkedList("racecarl")
console.log(palindrome(list)) //False
list = new LinkedList("csfdjlsd")
console.log(palindrome(list)) //False