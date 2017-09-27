'use strict';
var PigLatin;

PigLatin = {
  moveConsonant: function(word) {
    const firstLetter = word.match(/\w/);
    const remainingWord = word.split(/^./);

    const newWord = remainingWord[1] + firstLetter;
    return newWord;
  },

  appendAy: function(word) {
    return word + 'ay';
  },

  translate: function(word) {
    const step1 = PigLatin.moveConsonant(word);
    const finalWord = PigLatin.appendAy(step1);
    return finalWord;
  }
};

module.exports = PigLatin;
