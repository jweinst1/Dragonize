/**
 * Created by Josh on 12/5/15.
 */

//method of finding objects or subjects of sentences and objects.
//words that are common and succeed objects
var succ_words = [
    "is", "was", "are", "were", "can", "could", "can't", "cannot", "would", "does", "do", "should", "has", "had"
];
var pre_words = [
    "a", "an"
];
//words that are default objects
var default_obj = [
    "i", "he", "they", "she", "we", "me", "you", "us", "it"
];

var succ_patterns = [
    / (.+) [a-z]+[bcdfghjklmnpqrstvxz]ed/g, / (.+) [a-z]+[bcdfghjklmnpqrstvxz]es/g, / (.+) [a-z]+[bcdfghjklmnpqrstvxz]s/g
];

var testingtext = "They strolled through the work unit to the large parking shed where Heng and everyone else who lived and worked at Wei Teachers College stored their bicycles And then they dragged their feet to the apartment block where on the second floor they shared a small apartment with his parents";
var testingtext2 = "Sadie glanced down at her feet, The windblown dust from the Loess Plateau, along with a layer of local coal dust, had settled on her shoes. She watched as her husband leaned to the side of the busy road and hopped off his bicycle. The green leaves of a bunch of leeks poked out of a plastic bag that hung from his handlebars. In greeting, Sadie held up a complementary bottle of black vinegar.";

//tests an array of patterns on a single string.
function ismatch(word, plst) {
    for(i=0;i<plst.length;i++) if(plst[i].test(word)) return true;
    return false;
}
//retrieve all word pairs of text
function get_pairs (text) {

}



