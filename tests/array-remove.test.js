import test from 'ava';

import remove from '../source/array-remove';

test('throws on no array', t => {
  t.throws(() => {
    remove();
  });
});

test('removes from beginning', t => {
  const newArray = remove(['a', 'b', 'c'], 0);

  t.deepEqual(newArray, ['b', 'c']);
});

test('removes from end', t => {
  const newArray = remove(['a', 'b', 'c'], 2);

  t.deepEqual(newArray, ['a', 'b']);
});

test('removes inside', t => {
  const newArray = remove(['a', 'b', 'c', 'd'], 1);

  t.deepEqual(newArray, ['a', 'c', 'd']);
});
