var Stack = function() {
  // Create instance object
  var instanceObject = {};

  // Create size variable
  instanceObject.counter = 0;

  // Create storage object
  instanceObject.storage = {};

  // Extend instance with stackMethods
  _.extend(instanceObject, stackMethods);

  return instanceObject;
};

var stackMethods = {
  // Push Method
  push: function(value) {
    // add new value into storeage at key size
    this.storage[this.counter] = value;
    // increment
    this.counter += 1; 
  },

  // Pop Method
  pop: function() {
    if (this.counter === 0) { 
      return undefined;
    } else if (this.counter > 0) {
      var poppedObject = this.storage[this.counter - 1];
      delete this.storage[this.counter - 1];
      this.counter -= 1; 
      return poppedObject;
    }
  },


  // Size Method
  size: function() {
    return this.counter;
  }
};


