var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[start] = value;
    start++;
  };

  someInstance.dequeue = function() {
    if (end < start) {
      var val = storage[end];
      delete storage[end];
      end++;
      return val;
    }
  };

  someInstance.size = function() {
    return start - end;
  };

  return someInstance;
};
