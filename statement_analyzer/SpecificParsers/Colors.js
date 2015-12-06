/**
 * Created by Josh on 12/5/15.
 */

//color parser, collects information on color

var colorlist = [
    "green", "blue", "yellow", "red", "white", "black", "grey", "purple",
    "orange", "brown", "pink", "crimson", "violet", "aquamarine", "turquoise"
];
//creates a set for easy access with in operator
var SET = function(elements) {
    for(var num in elements) this[elements[num]] = true;
};

var colorset = new SET(colorlist);

//checks for a color
function containscolor(text) {
    for(var num in colorlist) if(text.search(colorlist[num]) != -1) return true;
    return false;
}
