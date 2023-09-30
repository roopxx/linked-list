// Import the Node class from another module.
import Node from "./node";

// Define a LinkedList class.
class LinkedList {
  constructor() {
    // Initialize the head of the linked list as null (empty list).
    this.head = null;
  }

  // Add a new node with the given value to the beginning of the linked list.
  prepend(value) {
    let temp = null;
    if (this.head != null) temp = this.head;
    this.head = new Node(value);
    this.head.nextNode = temp;
  }

  // Add a new node with the given value to the end of the linked list.
  append(value) {
    let current = this.head;
    if (current == null) {
      this.prepend(value); // If the list is empty, use prepend to add the first element.
    } else {
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
    }
  }

  // Get the size (number of nodes) of the linked list.
  size() {
    let size = 0;
    let current = this.head;
    while (current != null) {
      size++;
      current = current.nextNode;
    }
    return size;
  }

  // Get the head node of the linked list.
  head() {
    let current = this.head;
    return current;
  }

  // Get the tail node (last node) of the linked list.
  tail() {
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  // Get the node at the specified index.
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

  // Remove the last node from the linked list.
  pop() {
    let current = this.head;
    while (current.nextNode.nextNode != null) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  // Check if the linked list contains a node with the given value.
  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.data === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  // Find the index of the first node with the given value.
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

  // Convert the linked list to a string for easy visualization.
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

  // Insert a new node with the given value at the specified index.
  insertAt(value, index) {
    let current = this.head;
    let prev = null;
    if (current === null) this.prepend(value);
    // If the list is empty, use prepend to add the first element.
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

  // Remove the node at the specified index.
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

// Export the LinkedList class to make it available for use in other modules.
export default LinkedList;
