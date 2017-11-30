var Queue = function() {

  var someInstance = Object.create(queueMethods);
  someInstance.headIndex = 0;
  someInstance.tailIndex = 0;
  someInstance.storage = {}; 
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tailIndex] = value;
    this.tailIndex += 1; 
  },
  dequeue: function() {
    debugger;   
    if (this.size() === 0) {
      return undefined;
    } else if (this.size() > 0) {
      
      var removedValue = this.storage[this.headIndex];
      delete this.storage[this.headIndex];
      this.headIndex += 1;
      return removedValue;
    }
  },
  size: function() {
    return this.tailIndex - this.headIndex;
  }
};


