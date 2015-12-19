/**
 * Created by Josh on 12/5/15.
 */

//color parser, collects information on color

function word_count(text) {
    var count_dict = {};
    var words = text.split(" ");
    for(var num in words) {
        if(words[num] in count_dict) count_dict[words[num]] += 1;
        else count_dict[words[num]] = 1;
    }
    return count_dict
}

var colorlist = [
    "green", "blue", "yellow", "red", "white", "black", "grey", "purple",
    "orange", "brown", "pink", "crimson", "violet", "aquamarine", "turquoise"
];
//creates a set for easy access with in operator
var SET = function(elements) {
    for(var num in elements) this[elements[num]] = true;
};
//color counting object
var colorcount = function() {
    for(var col in colorset) this[col] = 0;
};

var colorset = new SET(colorlist);

//checks for a color
function containscolor(text) {
    for(var num in colorlist) if(text.search(colorlist[num]) != -1) return true;
    return false;
}
//counts unique_colors
function unique_colors(text) {
    var ccount = 0;
    for(var num in colorlist) if(text.search(colorlist[num]) != -1) ccount += 1;
    return ccount;
}
//gets count of specific color in the text.
function count_color(text, color) {
    var colorpat = new RegExp(color, "g");
    var matches = text.match(colorpat);
    return matches.length;
}
//puts count of all colors in a dictionary
function count_all_colors(text) {
    var counter = new colorcount();
    for(var color in counter) counter[color] = count_color(text, color);
    return counter;
}
//captures first color
function getfirstcolor(text, color) {
    var colors = new RegExp(color);
    var match = colors.exec(text);
    return match[1];
}
//gets first index of a color
function firstcolorind(text, color) {
    var coloreg = new RegExp(color, "g");
    return text.search(coloreg);
}



