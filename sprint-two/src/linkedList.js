var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value); 
    
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // Assign the head node to a variable currentHead
    var currentHead = list.head; // possible to be either an node object, or null

    // If head null? Do a boolean check (is head is null) to see if the list has any nodes
    if (!currentHead) {
      return undefined;
    // Else if only one node in list (if head.next is null)
    } else if (!currentHead.next) {
      // if yes: null out list.tail and null out list.tail
      list.head = null;
      list.tail = null; 
    } else {
      list.head = currentHead.next;
    }
    
    return currentHead.value;
  };

  list.contains = function(target) {
    var checkNode = list.head;
    var isTargetFound = false;

    while (checkNode && isTargetFound === false) {
      if (checkNode.value === target) {
        isTargetFound = true;
      } 

      checkNode = checkNode.next;
    }

    return isTargetFound;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
1. Add Tail: O(1)
2. Remove Head: O(1)
3. Insertion before: O(n)
4. Insertion after: O(1)
5. contains: O(n) 
Complete.
*/
