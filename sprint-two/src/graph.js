

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

  this.storage[value] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // store node's edge's as edgesOfNode
  var edgesOfNode = this.storage[node].edges; 
  // Loop through edgesOfNode
  for (var i = 0; i < edgesOfNode.length; i++) {
    // call removeEdge on each child
    removeEdge(node, edgesOfNode[i]);
  }
  delete this.storge[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check if fromNode's edges contain toNode 
  var hasEdge = this.hasEdge(fromNode, toNode);
  // if no
  if (hasEdge) {
    // push toNode into fromNodes.edges
    this.storage[fromNode][edges].push(toNode);
  // repeat reversed
    this.storage[toNode][edges].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // store two variables edgesOfFromNode, edgesOfToNode
  // var = this.storage[xxxx].edges; 
  // remove fromNode from edgesOfToNode
    // use indexOf to find index within edgesOf
    // use splice to cut it out. 
  arrayName.splice(index, 1);
  // repeat for reverse. 
 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


