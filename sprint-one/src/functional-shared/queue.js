var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.headIndex = 0;
  someInstance.tailIndex = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.tailIndex] = value;
    this.tailIndex += 1;
  },
  dequeue: function (value) {
    if (this.size() === 0) {
      return undefined;
    } else if (this.size() > 0) {
      var removedElement = this.storage[this.headIndex];
      delete this.storage[this.headIndex];
      this.headIndex += 1;
      return removedElement;
    }
  },
  size: function (value) {
    return this.tailIndex - this.headIndex;
  } 
  
};


