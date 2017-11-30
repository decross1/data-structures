var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.queueLen = 0;
  this.tailIndex = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.tailIndex] = value;
  this.tailIndex += 1; 
  this.queueLen += 1;  
};

Queue.prototype.dequeue = function () {
  if (this.queueLen === 0) {
    return undefined;
  } else if (this.queueLen > 0) {
    var removedValue = this.storage[this.tailIndex - this.queueLen];
    delete this.storage[this.tailIndex - this.queueLen];
    this.queueLen -= 1;
    return removedValue;
  }
};

Queue.prototype.size = function () {
  return this.queueLen;
};

