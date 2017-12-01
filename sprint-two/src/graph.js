

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = { 
    value: node, 
    edges: []
  };

  this.storage[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // iterate through storage
  for (var storageKeys in this.storage) {
    // if (a key is equal to node)
    if (this.storage[storageKeys].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // store node's edge's as edgesOfNode
  var edgesOfNode = this.storage[node].edges; 
  // Loop through edgesOfNode
  for (var i = 0; i < edgesOfNode.length; i++) {
    // call removeEdge on each child
    this.removeEdge(node, edgesOfNode[i]);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // store edges array for each input
  var edgesOfFromNode = this.storage[fromNode].edges;

  // run indexOf to check if each "edgesArray" has the opposing nodes value toNode
  if (edgesOfFromNode.indexOf(toNode) >= 0) {
    return true;
    
  // return boolean true if indexOf is not -1, else false
  }
  return false; 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check if fromNode's edges contain toNode 
  var hasEdge = this.hasEdge(fromNode, toNode);
  // false
  // if no
  if (!hasEdge) {
    // push toNode into fromNodes.edges
    this.storage[fromNode]['edges'].push(toNode);
  // repeat reversed
    this.storage[toNode]['edges'].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // store two variables edgesOfFromNode, edgesOfToNode
  var edgesOfFromNode = this.storage[fromNode].edges;
  var edgesOfToNode = this.storage[toNode].edges;

  // remove the edges from each parameter node 
  edgesOfFromNode.splice(edgesOfFromNode.indexOf(toNode), 1);
  edgesOfToNode.splice(edgesOfToNode.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through storage 
  _.each(this.storage, function (item) {
    // run function cb(item.value) 
    cb(item.value);  
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


