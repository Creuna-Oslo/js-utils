import test from 'ava';

import move from '../source/array-move';

test('throws on no array', t => {
  t.throws(() => {
    move();
  });
});

test('moves from beginning', t => {
  const newArray = move(['a', 'b', 'c'], 0, 2);

  t.deepEqual(newArray, ['b', 'c', 'a']);
});

test('moves from end', t => {
  const newArray = move(['a', 'b', 'c'], 2, 0);

  t.deepEqual(newArray, ['c', 'a', 'b']);
});

test('moves inside', t => {
  const newArray = move(['a', 'b', 'c', 'd'], 1, 2);

  t.deepEqual(newArray, ['a', 'c', 'b', 'd']);
});
