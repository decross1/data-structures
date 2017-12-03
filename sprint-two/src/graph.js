

// Instantiate a new graph
var Graph = function() {
  this._storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = { 
    value: node, 
    edges: []
  };

  this._storage[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this._storage[node] === undefined ? false : true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // store node's edge's as edgesOfNode
  var edgesOfNode = this._storage[node].edges; 
  // Loop through edgesOfNode
  for (var i = 0; i < edgesOfNode.length; i++) {
    // call removeEdge on each child
    this.removeEdge(node, edgesOfNode[i]);
  }
  delete this._storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // store edges array for each input
  if (this.contains(fromNode) === false || this.contains(toNode) === false) {
    return false;
  }
  var edgesOfFromNode = this._storage[fromNode].edges;

  // run indexOf to check if each "edgesArray" has the opposing nodes value toNode
  if (edgesOfFromNode.indexOf(toNode) >= 0) {
    return true;
    
  // return boolean true if indexOf is not -1, else false
  }
  return false; 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  // If either fromNode or toNode does not exist, break here
  if (this.contains(fromNode) === false || this.contains(toNode) === false) {
    return;
  }

  // check if fromNode's edges contain toNode 
  var hasEdge = this.hasEdge(fromNode, toNode);

  //
  if (!hasEdge) {
    // push toNode into fromNodes.edges
    this._storage[fromNode]['edges'].push(toNode);
  // repeat reversed
    this._storage[toNode]['edges'].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // store two variables edgesOfFromNode, edgesOfToNode
  var edgesOfFromNode = this._storage[fromNode].edges;
  var edgesOfToNode = this._storage[toNode].edges;

  // remove the edges from each parameter node 
  edgesOfFromNode.splice(edgesOfFromNode.indexOf(toNode), 1);
  edgesOfToNode.splice(edgesOfToNode.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through storage 
  _.each(this._storage, function (item) {
    // run function cb(item.value) 
    cb(item.value);  
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
1. AddNode: constant O(1)

We have questions on these: 
2. AddEdge: Worst case linear - it's contingent on traversing the edges for a node, and worst case a node has n edges. 
3. RemoveNode: Worst case quadratic (n^2) - again, based on average edges in network
4. RemoveEdge: 

5. Contains: O(1)
5. forEachNode: linear - O(n) 
 */


