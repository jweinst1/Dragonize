/**
 * Created by Josh on 12/2/15.
 */
//File that implements statistical frequencies for words in text.

//returns frequency of word in text
function word_freq(text, word) {
    var words = text.split(" ");
    var count = 0;
    for(i=0;i<words.length;i++) if(words[i]==word) count++;
    return count/words.length;
}
//creates an object dict of all word frequencies in a piece of text.
function all_frequencies(text) {
    var words = text.split(" ");
    for(var num in words) this[words[num]] = word_freq(text, words[num]);
}

var freq_opers = {
    max : function (freqdict) {
        var current = Object.keys(freqdict)[0];
        for(var key in freqdict) {
            if(freqdict[key] > freqdict[current]) current = key;
        }
        return current;
    },
    min : function (freqdict) {
        var current = Object.keys(freqdict)[0];
        for(var key in freqdict) {
            if(freqdict[key] < freqdict[current]) current = key;
        }
        return current;
    },
    f_range : function (freqdict) {
        return freq_opers.max(freqdict) - freq_opers.min(freqdict);
    }
};


