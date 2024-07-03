/*
Question:
1. Write a listnode class
    1. constructor accepts a key, value, and next as parameters
    2. new ListNode('a', '3') => {'key': 'a', 'val':3, 'next': null}
    3. node.next = new ListNode(key, val)
2. Write method on the listnode class called append
    1. take a key and value as parameters
    2. add a new listnode to the end of of a linked list containing key value pair
    3. if key already exists in linked list, overwrite old value
 */

    class ListNode {
        constructor(key, value, next = null) {
          this.key = key;
          this.value = value;
          this.next = next;
        }
      }
      class LinkedList {
        constructor(key, val) {
          this.head = new ListNode(key, val);
        }
      
        append(key, val) {
          let head = this.head;
          if (!this.head) {
            this.head = new ListNode(key, val);
            return;
          }
          while (head) {
            if (head.key === key) {
              head.value = val;
              return;
            }
            if (head.next === null) {
              head.next = new ListNode(key, val);
              return;
            }
            head = head.next;
          }
        }
        logList() {
          const entries = [];
          let head = this.head;
          while (head) {
            entries.push([head.key, head.value]);
            head = head.next;
          }
          console.log(entries);
        }
        search(key) {
          if (!this.head) return null;
          if (this.key === key) {
            return this.value;
          }
          if (!this.next) {
            return null;
          }
          return this.next.search(key);
        }
        delete(key) {
          let head = this.head;
          if (head.key === key) {
            this.head = this.head.next;
          }
          while (head.next) {
            if (head.next.key === key) {
              head.next = head.next.next;
              return;
            }
            head = head.next;
          }
        }
      }


let originalHead = new LinkedList("a", 'node 1')
let head = originalHead
originalHead.append("a", 'node 2')
originalHead.append("b", 'node 3')
originalHead.append("c", 'node 4')
originalHead.logList()
console.log("_________________________")
originalHead.logList()
console.log(originalHead.search("d"))
console.log(originalHead.search("c"))
console.log("_________________________")
originalHead.logList()
originalHead.delete('c')
// console.log(originalHead)
