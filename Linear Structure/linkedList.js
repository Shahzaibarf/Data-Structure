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
}

// calling
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
