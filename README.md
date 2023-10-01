# JavaScript LinkedList

This repository is part of TOP's assignment which contains a JavaScript implementation of a singly linked list data structure using two classes `Node` and `LinkedList`. A singly linked list is a fundamental data structure used for storing a collection of elements in a linear order.

## Classes

### Node Class

The `Node` class is a simple JavaScript class that represents a node in a singly linked list. Each node contains a `data` field to store a value and a `nextNode` field to reference the next node in the list.

### LinkedList Class

The `LinkedList` class initializes the linked list the head of list as `null(empty list)` and provides the following methods:

- `prepend(value)`: Add an element to the beginning of the list.
- `append(value)`: Add an element to the end of the list.
- `size()`: Get the number of elements in the list.
- `head()`: Get the head (first element) of the list.
- `tail()`: Get the tail (last element) of the list.
- `at(index)`: Get the element at a specific index.
- `pop()`: Remove the last element from the list.
- `contains(value)`: Check if the list contains a specific value.
- `find(value)`: Find the index of the first occurrence of a value.
- `toString()`: Convert the list to a string for display.
- `insertAt(value, index)`: Insert an element at a specific index.
- `removeAt(index)`: Remove an element at a specific index.

## Example

Here's an example of how to use the `LinkedList` class:

```javascript
import LinkedList from "./LinkedList";

const myList = new LinkedList();

myList.append(1);
myList.append(2);
myList.append(3);

console.log(myList.toString()); // Outputs: (1) -> (2) -> (3) -> null
```

For more detailed usage examples, refer to the code comments within the `LinkedList.js` file.
