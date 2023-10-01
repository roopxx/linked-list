// Define a Node class.
class Node {
  constructor(value) {
    // Initialize the data property with the provided value, or null if no value is provided.
    this.data = null || value;

    // Initialize the nextNode property as null, representing the next node in the linked list.
    this.nextNode = null;
  }
}

// Export the Node class to make it available for use in other modules.
export default Node;
