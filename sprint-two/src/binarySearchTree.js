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
    if (this.contains.call(this.right, target)) {
      return true;
    }
  } else if (target < this.value && this.left) {
  // else if (this.value < target) and this.left is not null 
    //  if contains(this.left) is true, return true 
    if (this.contains.call(this.left, target)) {
      return true;
    }
  }

  return false;
};

BinarySearchTree.prototype.insert = function(insertValue) {
  // create function called walkAndAdd(tree)
  
  var walkAndAdd = function(tree) {

    if (tree.value > insertValue) {
      // is this.right not null
      if (!tree.left) {
        // this.left = newnode(insertValue)
        tree.left = BinarySearchTree(insertValue);
      // else
      } else {
        // walkAndAdd(this.left)
        walkAndAdd(tree.left);
      }
    // compare insertValue to this.value
    // if this.value > insertValue
    } else if (tree.value < insertValue) {
      // is this.right not null
      if (!tree.right) {
        // this.right = newnode(insertValue)
        tree.right = BinarySearchTree(insertValue);
      //   debugger;
      // else
      } else {
        // walkAndAdd(this.right)
        walkAndAdd(tree.right);
      }
    }
  };

  walkAndAdd(this);
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // Do callback on Value
  cb(this.value);
  
  // If there's a left node, run DFL on left
  if (this.left) {
    this.depthFirstLog.call(this.left, cb);
  }
  // If there's a right node, run DFL on right  
  if (this.right) {
    this.depthFirstLog.call(this.right, cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  // Instantiate an empty queue in the pseudoclassical style
  // Call it breadthQueue
  var breadthQueue = new QueueLocal();
  

  // Create an inner function called traverse
  var traverse = function(tree) {
    // debugger;
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

    if (breadthQueue.size() > 0) {
      traverse(breadthQueue.dequeue());   
    }
  };

  traverse(this);

  // Is the Queue.size greater than 0? 
  // If so, call traverse on the next dequeue item 


};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var QueueLocal = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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


