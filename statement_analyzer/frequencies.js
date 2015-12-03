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
    },
    above_freq : function (freqdict, decimal) {
        var wordlst = [];
        for(var key in freqdict) if(key[freqdict] >= decimal) wordlst.push(key);
        return wordlst;
    },
    below_freq : function (freqdict, decimal) {
        var wordlst = [];
        for(var key in freqdict) if(key[freqdict] <= decimal) wordlst.push(key);
        return wordlst;
    }
};



//takes a phrase and a regex, and continously searches and replaces the regex in the phrase to count how many
//times it occurs in the string.
function count_pattern(phrase, pattern) {
    var count = 0;
    while (true) {
        if(pattern.test(phrase)) {
            count ++;
            phrase = phrase.replace(pattern, "");
        }
        else break;
    }
    return count;
}
//tests if a word only appears once.
function is_unique(text, word) {
    var words = text.split(" ");
    var count = 0;
    for(i=0;i<words.length;i++) if(words[i]==word) count++;
    return count > 1;
}


/* -----Distance Frequencies--------*/
//measures distances of words from different places in text

//distance of start of word from 0
function dist_start(text, word) {
    var center = new RegExp(word+" ", "g");
    return text.search(center);
}

console.log(new all_frequencies("I love to code because it is fun, interesting, and coding is my passion"));