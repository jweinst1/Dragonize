/**
 * Created by Josh on 12/5/15.
 */

//capturing functions

//replaces the first occurence of a pattern in a string.
function removefirst(text, pattern) {
    text = text.replace(pattern, "");
    return text;
}
//captures the first pattern, returns the group.
function singlecapture(text, pattern) {
    var match = pattern.exec(text);
    return match[1];
}
//captures all groups in a text
function capture_all(text, pattern) {
    var captured = [];
    while(pattern.test(text)) {
        captured.push(singlecapture(text, pattern));
        text = removefirst(text, pattern);
    }
    return captured;
}
/*   capture_all("how does someone think hoovers", /h(..)/);
 => [ 'ow', 'in', 'oo' ]
 */

//collecting object that captures from a text
var Gcollector = function (pattern) {
    this.pattern = pattern;
    this.container = [];
    this.scan = function(text) {
        while(this.pattern.test(text)) {
            this.container.push(singlecapture(text, this.pattern));
            text = removefirst(text, pattern);
        }
    };
    this.getcaptures = function() {
        return this.container;
    };
};


//sorts text pieces via a switch statement into arrays
var Gsorter = function (pat) {
    this.pat = pat;
    this.groups = {pat:[], nopat:[]};
    this.sorttext = function(text) {
        switch (this.pat.test(text)) {
            case true: this.groups[pat].push(text);
                break;
            case false: this.groups[nopat].push(text);
                break;
            default: null;
        }
    };
    this.gettrue = function() {
        return this.groups[pat];
    };
    this.getfalse = function() {
        return this.groups[nopat];
    };
};

