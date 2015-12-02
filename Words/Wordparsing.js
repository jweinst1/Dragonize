/**
 * Created by Josh on 12/1/15.
 */

//replace all instances of replaced with newstr
function replace_all(phrase, replaced, newstr) {
    var temp = new RegExp(replaced, "g");
    return phrase.replace(temp, newstr);
}

function replace_all_list(phrase, replist, newstr) {
    for(var num in replist) phrase = phrase.replace(replist[num], newstr);
    return phrase;
}
//removes all words that start with a letter
function remove_wletter(phrase, letter) {
    letter += "[a-z]*";
    letter = " " + letter;
    var temp = new RegExp(letter, "g");
    return phrase.replace(temp, " ");
}

function getall_letter(phrase, letter) {
    phrase = phrase.split(" ");
    var newwords = [];
    for(i=0;i<phrase.length;i++) if(phrase[i][0]==letter) newwords.push(phrase[i]);
    return newwords;
}

var stopwords = [/ at /g, / ?the ?/g, / ?to ?/g, / he /g, / ?she ?/g, / ?an ?/g, / a /g,
    / ?was ?/g, / ?were ?/g, / ?and ?/g, / ?are ?/g, / ?by ?/g, / ?of ?/g, / ?that ?/g, / ?be ?/g, / ?from ?/g,
    / will /g];

//removes all stop words, or insignificant words of meaning

function remove_stops(phrase) {
    for(var num in stopwords) phrase = phrase.replace(stopwords[num], " ");
    return phrase;
}


