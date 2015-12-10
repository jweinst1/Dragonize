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
    };
};

//gets the next possible words after a specific phrase
function getNextwords(phrase, trie) {
    phrase = phrase.toLowerCase();
    var words = phrase.split(" ");
    var current = trie.phrases;
    while (words.length>0) {
        var word = words.shift();
        if (word in current) current = current[word];
        else return "phrase not present";
    }
    return Object.keys(current);
}
//gets all first words in the trie
function getFirstwords(trie) {
    return Object.keys(trie);
}

var t = new Sentence_Trie();
t.statement("i love apples and oranges");
t.statement("i love oranges and apples");
console.log(getNextwords("i love", t));
