/**
 * Created by Josh on 12/7/15.
 */

//word hashing function in javascript

function wordhash(text) {
    if(/[a-zA-Z]+/.test(text)===false) throw "Illegeal Characters";
    else {
        text = text.toLowerCase();
        var chars = text.split("");
        var hash = 1;
        for(i=0;i<chars.length;i++) {
            switch(chars[i]) {
                case "a": hash += 271;
                    break;
                case "b": hash += 15;
                    break;
                case "c": hash += 9;
                    break;
                case "d": hash += 104;
                    break;
                case "e": hash += 211;
                    break;
                case "f": hash += 46;
                    break;
                case "g": hash += 2;
                    break;
                case "h": hash += 132;
                    break;
                case "i": hash += 73;
                    break;
                case "j": hash += 144;
                    break;
                case "k": hash += 183;
                    break;
                case "l": hash += 354;
                    break;
                case "m": hash += 257;
                    break;
                case "n": hash += 58;
                    break;
                case "o": hash += 12;
                    break;
                case "p": hash += 37;
                    break;
                case "q": hash += 9;
                    break;
                case "r": hash += 312;
                    break;
                case "s": hash += 101;
                    break;
                case "t": hash += 203;
                    break;
                case "u": hash += 44;
                    break;
                case "v": hash += 64;
                    break;
                case "w": hash += 332;
                    break;
                case "x": hash += 91;
                    break;
                case "y": hash += 69;
                    break;
                case "z": hash += 32;
                    break;
                default: hash += 0;
            }
        }
        return hash;
    }
}
//hashs all words in an array
function hash_arr(words) {
    return words.map(wordhash);
}

//hashs all words in an array, but applies a unique addition to each hash key of the array, to account for identical words.
function unique_wordmap(words) {
    var hashed = words.map(wordhash);
    for(i=0;i<hashed.length;i++) hashed[i] += i+1;
    return hashed;
}