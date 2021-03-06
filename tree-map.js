/*Tree Map

- [ ] Implement a higher order function, `map`, on the given `Tree` class using pseudoclassical instantiation

Available resources for this prompt
MDN
*/
var _ = require('underscore');
var Tree = function(value){


  var newNode = {};
  newNode.value = value;

  _.extend(newNode,newObj);

  newNode.children = [];




  return newNode;
}

var newObj = {};

newObj.addChild = function(value){

  var childs = new Tree(value);
  //this.children.push(childs);
  //childs.children.push();
  console.log("adds");
  this.children.push(childs);

}

newObj.map = function(mapper){

  // I will go thru every node of the tree

  mapper(new Tree(this.value));


  // willl pass value of current node to create new tree/node
  for(var k=0; k<this.children.length; k++){

    var childz = this.chilren[k];
    mapper(childz.value);
  }




  return;
  //console.log("maps");
}

var myTree = new Tree('rootx');

myTree.addChild('Johns');
console.log(myTree);
myTree.map();

/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */
