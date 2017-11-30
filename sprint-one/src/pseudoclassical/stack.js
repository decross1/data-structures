var Stack = function() {
  this.storage = {};
  this.counter = 0;  
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1; 
};

Stack.prototype.pop = function() {
  if (this.counter === 0) {
    return undefined;
  } else if (this.counter > 0) {
    var poppedValue = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter -= 1; 
    return poppedValue;
  }
};

Stack.prototype.size = function() {
  return this.counter;
};


