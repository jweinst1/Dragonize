/**
 * Created by Josh on 12/3/15.
 */
//file for implementing frequencies across distances in texts
//such as around a specific position, what is the most common word?

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinofArray(numArray) {
    return Math.min.apply(null, numArray);
}

//gets first index of word
function first_index(text, word) {
    var words = text.split(" ");
    for(i=0;i<words.length;i++) if(words[i]==word) return i;
}
//find distance of first word from the end
function dist_end(text, word) {
    var words = text.split(" ");
    for(i=words.length-1;i>=0;i-=1) if(words[i]==word) return words.length - i;
}

function all_indexes(text, word) {
    var words = text.split(" ");
    var indexes = [];
    for(var num in words) if(words[num]==word) indexes.push(num);
    return indexes;
}

//gets the max separation between two words in text
function max_distance(text, word1, word2) {
    return Math.abs(getMaxOfArray(all_indexes(text, word1)) - getMinofArray(all_indexes(text, word2)));
}

//creates dictionary of word indexes in a text.
var index_dict = function(text) {
    var words = text.split(" ");
    for(var num in words) this[words[num]] = all_indexes(text, words[num]);
};