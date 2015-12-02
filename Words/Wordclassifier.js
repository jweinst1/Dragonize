/**
 * Created by Josh on 12/1/15.
 */
//document intended to guide the classification of words based on their purpose, through suffixes and prefixes.

//word tagging object

function Word(text, tag) {
    this.text = text;
    this.tag = tag || null;
}
//create list of words from sentence
function wordlist(phrase) {
    words = phrase.split(" ");
    arr = [];
    for(i=0;i<words.length;i++) arr.push(new Word(words[i]));
    return arr;
}