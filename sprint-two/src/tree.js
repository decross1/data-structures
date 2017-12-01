var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);

  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {
  addChild: function(value) {
    // declare a function to create a node
  // with the value and children properties. 

    // create a newNode variable, equal to a call to Node();
    var newNode = this.createNode(value);
  
  // push newNode into the children array of 'this'
  // we believe this refers to the object that .addChild was called on, e.g. tree.children[0].addChild;
    this.children.push(newNode);
  },

  contains: function(target) {

    // set up a var targetFound to false
    var targetFound = false;
    // refactor -> delete our tf variable

  
  
    // if this.value is equal to the target
    if (this.value === target) {
      targetFound = true;
      return targetFound;
      // refactor -> return true;
    // else check to see if this has any children
    } else if (this.children.length > 0) {
      // iterate through every child
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target) === true) {
          targetFound = true;
          // refactor --> return targetFound;
          //  refactor -> return true;
        }
      }
    }



    return targetFound;
    //  refactor ->  return false;
  }, 

  createNode: function(value) {
    var node = {};
    node.value = value;
    node.children = [];
    _.extend(node, treeMethods);
    return node; 
  }
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
