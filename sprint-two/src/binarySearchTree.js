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
    // compare insertValue to this.value
    // if this.value > insertValue
    if (tree.value < insertValue) {
      // is this.right not null
      if (!tree.right) {
        // this.right = newnode(insertValue)
        tree.right = Tree(insertValue);
      // else
      } else {
        // walkAndAdd(this.right)
        walkAndAdd(tree.right);
      }
    } else if (tree.value > insertValue) {
      // is this.right not null
      if (!tree.left) {
        // this.left = newnode(insertValue)
        tree.left = Tree(insertValue);
      // else
      } else {
        // walkAndAdd(this.left)
        walkAndAdd(tree.left);
      }
    }
  };

  walkAndAdd(this);
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {


};

BinarySearchTree.prototype.makeNewTreeNode = function(value) {
  return {
    value: value,
    left: null,
    right: null
  };
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
