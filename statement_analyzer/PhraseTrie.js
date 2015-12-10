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

//checks if phrase is present in the trie
function isphrase(phrase, trie) {
    phrase = phrase.toLowerCase();
    var words = phrase.split(" ");
    var current = trie;
    while (current != {}) {
        var word = words.shift();
        if(word in current) current = current[word];
        else return false;
    }
    return true;
}

var strie = single_trie("the apple is red and blue");
console.log(strie);


