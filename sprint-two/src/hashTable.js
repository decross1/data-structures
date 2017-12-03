

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create array insertArray [k , v];
  var insertArray = [k, v];
  // check items at index and store in var itemsAtIndex
  var numOfItems = this.itemsAtIndex(index);
  // if items = 0

  if (numOfItems === 0) { 
    // make this._storage[index] = insertArray
    this._storage[index] = insertArray; 
  // else if items = 1
  } else if (numOfItems === 1) {
    // var old = this._storage[index];
    var existing = this._storage[index];
    // overwrite this._storage[index] = [old, insertArray]
    // if it's a new unique key:
    if (this._storage[index][0] !== k) {
      // else
      this._storage[index] = [existing, insertArray];
    } else {
      //update the value at key bob
      this._storage[index][1] = v; 
    }
    // else if items >= 2
  } else if (numOfItems >= 2) {
    // push to this._storage
    
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        break;
      }
      // On the last loop of the for loop, if we haven't
      // found an existing element with the same key
      // push that element in.
      if (i === this._storage[index][length - 1]) {
        this._storage[index].push(insertArray);   
      }    
    } 
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
 // console.log(this._storage);
  // check number of items at Index
//  debugger;
  var numOfItems = this.itemsAtIndex(index);
  var arrayAtIndex = this._storage[index];
  // If there are 0 items
  if (numOfItems === 0) {
    // return undefined 
    return undefined;
  } else if (numOfItems === 1) {
  // If there is exactly one item
    // return the v (this._storage[index][1])
    return arrayAtIndex[1]; 
  } else {
  // If there is more than one
    // iterate over the array at the index
    for (var i = 0; i < arrayAtIndex.length; i++) {
    // for each array, check if 1st at index 0 element is equal to k
      // if it is, return 2nd element
      if (arrayAtIndex[i][0] === k) {
        return arrayAtIndex[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Check for how many items  
  var numOfItems = this.itemsAtIndex(index);
  // else if item check is 1
  if (numOfItems === 1) {
    this._storage[index] = undefined;
  // else if item greater or equal than two 2
  } else if (numOfItems > 1) {
    // loop through the array at the matching index.
    var arrayAtIndex = this._storage[index];
    for (var i = 0; i < arrayAtIndex.length; i++) {
    // if item is found
      if (arrayAtIndex[i][0] === k) {
      // splice out that item at item's index
        arrayAtIndex.splice(i, 1);
      // if item check 2
        if (numOfItems === 2) {
          _.flatten(arrayAtIndex, true);
        // also flatten the results
        }
      }
    }
  }
};

HashTable.prototype.itemsAtIndex = function(index) {
  var arrayAtIndex = this._storage[index];

  // If arrayAtIndex[0] is not an array
  if (arrayAtIndex === undefined) {
    return 0;
  } else if (!Array.isArray(arrayAtIndex[0])) {
    return 1;
  } else if (Array.isArray(arrayAtIndex[0])) {
    return arrayAtIndex.length;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 1. Insert: 
    - worst case linear O(n) - if your hashing function distributes poorly
    - best case with a good hash is constant
  2. Retrieve: same as above
  3. Remove: worst case linear, best case constant
Complete.
*/


