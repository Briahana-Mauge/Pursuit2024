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
        let head = this.head;
        while (head) {
            if (head.key === key) {
                return head.value;
            }
            head = head.next;
        }
        return null;

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
originalHead.append("d", 'node 4')
// originalHead.logList()
// console.log("_________________________")
// originalHead.logList()
// console.log(originalHead.search("b"))
// console.log(originalHead.search("a"))
// console.log("_________________________")
// originalHead.logList()
// originalHead.delete('c')
// console.log(originalHead)
//________________________________________________________________________________________

/* answer questions */
//1. function: given the head of a linked list, log every value in the linked list to the console
function printEveryValue(list) {
    if (list) {
        console.log(list.value);
        printEveryValue(list.next);
    }
}
console.log(" ")
console.log("Question 1")
printEveryValue(originalHead.head);
console.log("_________________________")

//2. Explain the difference between a linked list and an array
/* ----- the difference between a linked list and an array is 
         arrays only work from their indices and they HAVE to be integers. indices are right next to each other 
         linkedLists points to the next node and the values arent necessarily net to each other
*/
//3. what is .next in a linked list for
/* ----- the .next is to access the information of next node/address/id on the linkedlist chain
 */


//4. function: given the head of a linked list, return the number of nodes in the linked list
function countNodesInList(list) {
    let count = 0;
    let head = list;
    while (head) {
        count++
        head = head.next;
    }
    return count;
}
console.log(" ")
console.log("Question 4")
console.log(countNodesInList(originalHead.head))
console.log("_________________________")

//5. function: given the head of a linked list, return true if any value in the linked list appears at least twice 
function checkForMultiples(list) {
    let valueMap = new Map();
    let head = list;

    while (head) {
        if (valueMap.has(head.value)) {
            return true;
        } else {
            valueMap.set(head.value, 1);
        }
        head = head.next;
    }
    return false;
}
console.log(" ")
console.log("Question 5");
console.log(checkForMultiples(originalHead.head));

// generate a new linked List of any size
function generateLinkedList(size) {
    if (!size) size = randomIntFromInterval(1, 30);
    let list;
    for (let i = 0; i < size; i++) {
        const code = randomIntFromInterval(32, 126);
        const key = String.fromCharCode(code);
        const value = randomIntFromInterval(0, 500);
        if (!list) {
            list = new LinkedList(key, value);
        } else {
            list.append(key, value);
        }
    }
    return list;
}
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//create new instance of hashmap
console.log("_____________________CREATE HASHMAP METHODS USING LINKED LISTS_________________")
class HashMap {
    constructor() {
        this.buckets = Array(701);
        this.size = 0
    }
    get(key) { //input is a hashmap key that may or may not exist
        //output is a value 
    }
    set(key, val) {
        //have to know the hashkey
        //does the key exist already?
        //if no, add the key and its value to the address of the hash key and call the size method to update the size of the hash map
        //if something exists in the address, create a linked list node and set it to the last node's next property
        // if yes, update the value for the current key
        let hashkey = this.hash(key);
        let address = this.buckets[hashkey];

        if (!this.buckets[hashkey]) {
            this.buckets[hashkey] = new ListNode(key, val)
            this.size++;
            return;
        }

        let sizeChange = this.has(key) ? 0 : 1
        address.append(key, val);
        this.size += sizeChange;
    }
    has(key) {
        //input is a hashmap key that may or may not exist
        //output is a boolean (iskey in the map?)
        //get hash for key
        //if slot is undefined, return false
        //if slot is not undefined, traverse the linked list via search method. if it returns not null, return true else return false
        let hashkey = this.hash(key);
        let address = this.buckets[hashkey];

        if (!address) return false;
        return address.search(key) !== null ? true : false;
    }
    delete(key) { }
    size() { }
    hash(key) { // only take in number or string keys
        if (typeof key === 'number') {
            return key % 701
        }
        if (typeof key === 'string') {
            //total = 0
            //iterate through string
            //find charcode of character
            //add code to total
            //return total % 701
            let total = 0;
            for (let i = 0; i < key.length; i++) {
                total += key[i].charCodeAt();
            }
            return total % 701;
        }
        throw Error('keys can only be numbers or strings');
    }
}

let map = new HashMap()
console.log(map.has('123'))

