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

/*
 * Complexity: What is the time complexity of the above functions?
 */
