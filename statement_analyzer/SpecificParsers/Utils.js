/**
 * Created by Josh on 12/19/15.
 */
//file for storing word and sentence utils

//sentence object
var Sentence = function (text){
    this.texts = text;
};

var Clause = function (text){
    this.texts = texts;
};
//makes an array of sentence objects
function sentencelist(text) {
    var statements = text.split(".");
    var bin = [];
    for(var num in statements) bin.push(new Sentence(statements[num]));
    return bin;
}
//enumerates sentences in an object
function enum_sentences(text) {
    var statements = text.split(".");
    var bin = {};
    for(i=0;i<statements.length;i++) bin[i] = statements[i];
    return bin;
}