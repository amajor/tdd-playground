'use strict';
var expect = require('chai').expect;

describe('PigLatin', () => {
  const PigLatin = require('./pigLatin.js');

  it('should exist', () => {
    expect(PigLatin).to.not.be.undefined;
  });

  describe('moveConsonant()', () => {
    it('should transfer the initial consonant of \'pizza\' to the end', () => {
      const input1 = 'pizza';
      const expected1 = 'izzap';
      const actual1 = PigLatin.moveConsonant(input1);
      expect(actual1).to.equal(expected1);
    });

    it('should transfer the initial consonant of \'soda\' to the end', () => {
      const input2 = 'soda';
      const expected2 = 'odas';
      const actual2 = PigLatin.moveConsonant(input2);
      expect(actual2).to.equal(expected2);
    });
  });

  describe('appendAy()', () => {
    it('should add \'ay\' to the end of the word \'izzap\'', () => {
      const input1 = 'izzap';
      const expected1 = 'izzapay';
      const actual1 = PigLatin.appendAy(input1);
      expect(actual1).to.equal(expected1);
    });

    it('should add \'ay\' to the end of the word \'odas\'', () => {
      const input2 = 'odas';
      const expected2 = 'odasay';
      const actual2 = PigLatin.appendAy(input2);
      expect(actual2).to.equal(expected2);
    });
  });

  describe('translate()', () => {
    it('should translate \'pizza\' to \'izzapa\'', () => {
      const input1 = 'pizza';
      const expected1 = 'izzapay';
      const actual1 = PigLatin.translate(input1);
      expect(actual1).to.equal(expected1);
    });

    it('should translate \'soda\' to \'odasay\'', () => {
      const input2 = 'soda';
      const expected2 = 'odasay';
      const actual2 = PigLatin.translate(input2);
      expect(actual2).to.equal(expected2);
    });
  });
});
