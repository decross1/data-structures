var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create size counter, set to 0 as initial value
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // create new key value pair at the key of current size counter
    storage[size] = value;
    // increment size counter;
    size += 1;
  };

  someInstance.pop = function() {
    // check size
    // if size is 0
    if (size === 0) {
      // return undefined
      return undefined;
    // else check if size > 0
    } else if (size > 0) {
      // store value at current size counter - 1 in variable
      var poppedValue = storage[size - 1];
      // delete the key value pair in storage at size counter
      delete storage[size - 1];
      // decrease counter by 1;
      size -= 1;
      // return variable
      return poppedValue; 
    }
    // if (size > 0) {
    //   size -= 1;
    //   var data = storage[size];
    //   delete storage[size];
    //   return data;
    // }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
