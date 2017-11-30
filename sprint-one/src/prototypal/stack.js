var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  someInstance.storage = {};
  
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter += 1;
  }, 

  pop: function() {
    if (this.counter === 0) {
      return undefined;
    } else if (this.counter > 0) {
      var poppedValue = this.storage[this.counter - 1];
      delete this.storage[this.counter - 1];
      this.counter -= 1;
      return poppedValue;
    }
  }, 

  size: function() {
    return this.counter;
  }
};


