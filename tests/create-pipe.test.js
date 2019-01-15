import test from 'ava';

import createPipe from '../source/create-pipe';

// These tests are a bit contrived since many of the native things can already be chained.

const capitalize = s => s.toUpperCase();
const removeSpaces = s => s.replace(/ /g, '');
const removeNonNumbers = s => s.replace(/[^\d]/g, '');
const map = f => a => a.map(f);
const sum = a => a.reduce((s, n) => s + n, 0);

const template = (t, input, pipeline, expected) => {
  t.is(expected, pipeline(input));
};

test('1', template, 'h e l l o', createPipe(capitalize, removeSpaces), 'HELLO');
test('2', template, 'a1b2c3', createPipe(removeNonNumbers, Number), 123);
test(
  '3',
  template,
  { a: 1, b: 2 },
  createPipe(Object.entries, map(tuple => tuple[1]), sum),
  3
);
