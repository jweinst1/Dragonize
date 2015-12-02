/**
 * Created by Josh on 11/30/15.
 */
//File that contains objects to manipulate words and sentences

//word object
function word (string, next) {
    this.text = string;
    this.next = next || null;
}
//linked word form
function build_sentence (string) {
    var words = string.split(" ");
    var last = new word(words[words.length-1]);
    for(i=words.length-2;i>=0;i-=1) last = new word(words[i], last);
    return last
}

//sentence object, linked object form form
function sentence (phrase) {
    var linked_lst = {};
    var current = linked_lst;
    var words = phrase.split(" ");
    for(i=0;i<words.length;i++) {
        current[words[i]] = {};
        current = current[words[i]];
    }
    return linked_lst;
}

//sentence methods/operations
//for built sentences
var sent_opers = {
    size : function(sentence) {
        var i = 0;
        while(sentence != null) {
            sentence = sentence.next;
            i++;
        }
        return i+1;
    },
    list : function(sentence) {
        var lst = [];
        while(sentence != null) {
            lst.push(sentence.text);
            sentence = sentence.next;
        }
        return lst;
    },
    append : function(sentence, text) {
        var current = sentence;
        while(current.next != null) current = current.next;
        current.next = new word(text);
        return sentence
    },
    pop : function(sentence) {
        var current = sentence;
        while(current.next != null) current = current.next;
        delete current.text;
        return sentence
    }
};
//single variable template sentence, for word substitution.
function Stemplate_sentence (phrase, pattern) {
    this.phrase = phrase;
    this.pattern = pattern;
    this.format = function (replacer) {
        return this.phrase.replace(this.pattern, replacer);
    }
}




