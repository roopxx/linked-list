import Node from "./node";

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    let temp = null;
    if (this.head != null) temp = this.head;
    this.head = new Node(value);
    this.head.nextNode = temp;
  }

  append(value) {
    let current = this.head;
    if (current == null) {
      this.prepend(value);
    } else {
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
    }
  }

  size() {
    let size = 0;
    let current = this.head;
    while (current != null) {
      size++;
      current = current.nextNode;
    }
    return size;
  }

  head() {
    let current = this.head;
    return current;
  }

  tail() {
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let size = this.size();
    let current = this.head;
    if (index >= size) {
      return "Index is out of range";
    } else {
      let track = 0;
      while (track != index) {
        current = current.nextNode;
        track++;
      }
      return `At index: ${index} this Node is present Data: ${current.data}`;
    }
  }

  pop() {
    let current = this.head;
    while (current.nextNode.nextNode != null) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.data === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.data === value) {
        console.log(`find(${value}): `, i);
        return i;
      }
      i += 1;
      current = current.nextNode;
    }
    console.log(`find(${value}): `, null);
    return null;
  }

  toString() {
    let str = "";
    let current = this.head;
    while (current) {
      if (!current.nextNode) {
        str += `(${current.data}) -> null`;
      } else {
        str += `(${current.data}) -> `;
      }
      current = current.nextNode;
    }
    console.log("toString(): ", str);
    return str;
  }

  insertAt(value, index) {
    let current = this.head;
    let prev = null;
    if (current === null) this.prepend(value);
    else {
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.nextNode;
      }
    }
    const newNode = new Node(value);
    prev.nextNode = newNode;
    newNode.nextNode = current;
  }

  removeAt(index) {
    let current = this.head;
    let prev = null;
    if (current === null) return "List is already empty";

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = current.nextNode;
  }
}

export default LinkedList;
