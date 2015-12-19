/**
 * Created by Josh on 12/19/15.
 */
//Data structure of a tree that sorts strings by their length,
//the left branch has the lower length while the right branch has the longer string.

var lengthnode = function(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
    this.getleftval = function() {
        return this.left.value;
    };
    this.getrightval = function() {
        return this.right.value;
    };
};

//checks if a length node is a leaf or not
function isleaf(lengthtree) {
    return treelength.left == null && treelength.right == null;
}
//checks if a length node is balanced accordingly
function isbalanced(lengthtree) {
    return treelength.getleftval() < treelength.value && treelength.getrightval() > treelength.value;
}
//inserts a value properly into a length tree recursively
function insertval(lengthtree, string) {
    if(string.length>lengthtree.value.length) {
        if(lengthtree.right==null) lengthtree.right = new lengthnode(string);
        else insertval(lengthtree.right, string);
    }
    else if(string.length<=lengthtree.value.length) {
        if(lengthtree.left==null) lengthtree.left = new lengthnode(string);
        else insertval(lengthtree.left, string);
    }
    else throw "String length not readable";
}
//gets the highest length value in the tree
function getlongest(lengthtree) {
    if(lengthtree.right==null) return lengthtree.value;
    else return getlongest(lengthtree.right);
}
//gets shortest length value in the tree.
function getshortest(lengthtree) {
    if(lengthtree.left==null) return lengthtree.value;
    else return getshortest(lengthtree.left);
}
