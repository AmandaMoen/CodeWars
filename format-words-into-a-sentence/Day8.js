Format words into a sentence

Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""
ALGORITHMS		UTILITIES		FORMATTING		STRINGS

// Best Practices Solution:
function formatWords(words){
  if (!words) return "";
  return words.filter(function(a) { return a !== ''}).join(', ').replace(/(, )+(\S+)$/, ' and $2');
}

function formatWords(words){
    if (!words || words.length === 0) {
        return '';
    }
    words = words.filter(function(word) {
        return word.length;
    });
    if (words.length == 0) {
        return '';
    }
    else if (words.length == 1) {
        return words[0];
    } else {
        return [words.slice(0, words.length -1).join(', '), words.slice(words.length - 1)[0]].join(' and ');
    }
}