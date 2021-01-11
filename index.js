
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const eqObjects = require('./eqObjects')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const head = require('./head');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');
const { find } = require('lodash');

module.exports = {
  assertArraysEqual : assertArraysEqual,
  assertEqual : assertEqual,
  assertObjectsEqual : assertObjectsEqual,
  countOnly : countOnly,
  countLetters : countLetters,
  eqArrays : eqArrays,
  eqObjects : eqObjects,
  findKey : findKey,
  findKeyByValue : findKeyByValue,
  head : head,
  tail : tail,
  letterPositions : letterPositions,
  map : map,
  middle : middle,
  takeUntil : takeUntil,
  without : without
};


