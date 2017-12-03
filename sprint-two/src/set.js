var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {  
};

setPrototype.add = function(item) {
  // check to see if it is already there using contains
  // if false
  if (!this.contains(item)) {
  // push item into storage 
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  // call indexOf on storage
  // if not -1, return true, else false
  if (this._storage.indexOf(item) >= 0) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  // get index
  var itemIndex = this._storage.indexOf(item);
  // if it contains, do array.splice(index, 1)
  if (itemIndex >= 0) {
    this._storage.splice(itemIndex, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
1. add: O(n) - linear 
2. remove: O(n) - linear (has 2n)
3. contains: O(n) - linear 
 */
