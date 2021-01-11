
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
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countOnly,
  countLetters,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  head,
  tail,
  letterPositions,
  map,
  middle,
  takeUntil,
  without
};


