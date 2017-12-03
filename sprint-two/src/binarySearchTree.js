var BinarySearchTree = function(value) {
  var thisInstance = Object.create(BinarySearchTree.prototype);
  thisInstance.value = value;
  thisInstance.left = null;
  thisInstance.right = null;
  return thisInstance;
};

BinarySearchTree.prototype.contains = function(target) {
  // Check to see if this.value equals our target
  if (this.value === target) {
  // if it is our target
    // return true
    return true;
  } else if (target > this.value && this.right) {
  // else if (this.value > target) and this.right is not null 
    //  if contains(this.right) is true, return true 
    if (this.right.contains(target)) {
      return true;
    }
  } else if (target < this.value && this.left) {
  // else if (this.value < target) and this.left is not null 
    //  if contains(this.left) is true, return true 
    if (this.left.contains(target)) {
      return true;
    }
  }

  return false;
};

BinarySearchTree.prototype.insert = function(insertValue) {
  
  if (this.value > insertValue) {
    // is this.right not null
    if (!this.left) {
      // this.left = newnode(insertValue)
      this.left = BinarySearchTree(insertValue);
    // else
    } else {
      this.left.insert(insertValue);
    }
  // compare insertValue to this.value
  // if this.value > insertValue
  } else if (this.value < insertValue) {
    // is this.right not null
    if (!this.right) {
      // this.right = newnode(insertValue)
      this.right = BinarySearchTree(insertValue);
    // else
    } else {
      this.right.insert(insertValue);
    }
  }

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // Do callback on Value
  cb(this.value);
  
  // If there's a left node, run DFL on left
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  // If there's a right node, run DFL on right  
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  // Instantiate an empty queue in the pseudoclassical style
  // Call it breadthQueue
  var breadthQueue = new QueueLocal();

  // Create an inner function called traverse
  var traverse = function(tree) {
    // Run callback on this.value
    cb(tree.value);
    // If the tree has a left (this.left)
    if (tree.left) {
      // Enqueue the left 
      breadthQueue.enqueue(tree.left);    
    }
    // If the tree has a right
    if (tree.right) {
      //Enqueue the right    
      breadthQueue.enqueue(tree.right);
    }
    // Is the Queue.size greater than 0? 
    // If so, call traverse on the next dequeue item 
    if (breadthQueue.size() > 0) {
      traverse(breadthQueue.dequeue());   
    }
  };

  traverse(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
Balanced: 
  1. Contains: logarithmic O(log n)
  2. Inserts: logarithmic O(log n) 
  3. Operate on all item: Breadth and Depth Logs: Linear O(n)

Unbalanced:
  1. Contains: linear
  2. Inserts: linear

Complete.
*/

/*
 * TODO: 
- If time allows, figure out how to reference the Queue file without
copying
- Determine if we can run BFL recursively without an inner function 
 */

var QueueLocal = function() {
  this.storage = {};
  this.queueLen = 0;
  this.tailIndex = 0;
};

QueueLocal.prototype.enqueue = function (value) {
  this.storage[this.tailIndex] = value;
  this.tailIndex += 1; 
  this.queueLen += 1;  
};

QueueLocal.prototype.dequeue = function () {
  if (this.queueLen === 0) {
    return undefined;
  } else if (this.queueLen > 0) {
    var removedValue = this.storage[this.tailIndex - this.queueLen];
    delete this.storage[this.tailIndex - this.queueLen];
    this.queueLen -= 1;
    return removedValue;
  }
};

QueueLocal.prototype.size = function () {
  debugger;
  return this.queueLen;
};




