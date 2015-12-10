/**
 * Created by Josh on 12/9/15.
 */
//Trie that are created from sentences

//constructs a trie formed form a single sentence as an object.
function single_trie(phrase) {
    phrase = phrase.toLowerCase();
    var trie = {};
    var words = phrase.split(" ");
    var current = trie;
    while (words.length > 0) {
        var word = words.shift();
        if(word in current) current = current[word];
        else {
            current[word] = {};
            current = current[word];
        }
    }
    return trie;
}

var Trie_opers = {
    
};

//checks if phrase is present in the trie
function isphrase(phrase, trie) {
    phrase = phrase.toLowerCase();
    var words = phrase.split(" ");
    var current = trie;
    while (words.length>0) {
        var word = words.shift();
        if(word in current) current = current[word];
        else return false;
    }
    return true;
}

//Trie that can accept multiple entries of sentence statements
var Sentence_Trie = function () {
    this.phrases = {};
    this.statement = function(phrase) {
        phrase = phrase.toLowerCase();
        var words = phrase.split(" ");
        var current = this.phrases;
        while (words.length>0) {
            var word = words.shift();
            if(word in current) current = current[word];
            else {
                current[word] = {};
                current = current[word];
            }
        }
    }
};




