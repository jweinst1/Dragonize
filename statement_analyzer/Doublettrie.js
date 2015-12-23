/**
 * Created by Josh on 12/22/15.
 */
//File for implementing the Doublet Trie, a special trie that only binds statements
//two words long, its useful for building natural language responses.

//gets all pairs of words in a sentence
function getwordpairs(text) {
    return text.match(/[a-zA-Z1-9,;':]+ [a-zA-Z1-9,;':]+/g);
}
//removes the first word and it's space in a sentence
function removefirstword(text) {
    return text.replace(/[a-zA-Z]+ /, "");
}
//gets pairs of words starting at the second word(odd count)
function getoddpairs(text) {
    var nofirst = text.replace(/[a-zA-Z]+ /, "");
    return nofirst.match(/[a-zA-Z1-9,;':]+ [a-zA-Z1-9,;':]+/g);
}

//doublet trie object uses the pair method to add into the dictionary
var doublet_trie = function() {
    this.trie = {};
    this.pair = function(text) {
        var words = text.split(" ");
        if(words[0] in this.trie) this.trie[words[0]][words[1]] = {};
        else {
            this.trie[words[0]] = {};
            this.trie[words[0]][words[1]] = {};
        }
    };
    this.statement = function(text) {
        var evenpairs = getwordpairs(text);
        var oddpairs = getoddpairs(text);
        for(var num in evenpairs) this.pair(evenpairs[num]);
        for(var num in oddpairs) this.pair(oddpairs[num]);
    }
};

var r = new doublet_trie();
r.statement("I love apples and people");
r.statement("People don't like me but I like them");
console.log(r.trie);