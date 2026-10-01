// Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// linkedList
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add Node
    append(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  
   // findmiddleValue
    findMiddleValue() {
        let slow = this.head;
        let fast = this.head;
        while (
            fast !== null &&
            fast.next !== null
        ) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
      }

   // insertAtBeginning
    insertAtBeginning(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }

  // Reverse 
    reverse() {
        let previous = null;
        let current = this.head;
        while (current !== null) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }

  // Search Node 
    search(value) {
      let current = this.head;
      while (current !== null) {
          if (current.value === value) {
              return true;
          }
          current = current.next;
      }
      return false;
    }

  // Delete Node
  delete(value) {
    if (this.head === null) {
        return;
    }
    if (this.head.value === value) {
        this.head = this.head.next;
        return;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
          current.next = current.next.next;
          return;
      }
        current = current.next;
    }
  }

// insert at specific position
insertAtPosition(value, position) {
    const newNode = new Node(value);
    if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    let current = this.head;
    for (let i = 0; i < position - 1; i++) {
        if (current === null) {
            return;
        }
        current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
}

 // Print
    print() {
      let current = this.head;
      while (current !== null) {
          console.log(current.value);
          current = current.next;
      }
    }

   // hasCycle && Floyd's Cycle Detection Algorithm
    hasCycle() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
  }
}

// calling
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
