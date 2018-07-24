// Return index of node under its parents. Eg, if you're the fourth child, return 3.
Element.prototype.avgetParentIndex = function() {
  return Array.prototype.indexOf.call(this.parentNode.children, this);
}
