import test from 'ava';

import insert from '../source/array-insert';

test('throws on no array', t => {
  t.throws(() => {
    insert();
  });
});

test('inserts at beginning', t => {
  const newArray = insert([0, 1, 2], 0, 'x');

  t.deepEqual(newArray, ['x', 0, 1, 2]);
});

test('inserts at end', t => {
  const newArray = insert([0, 1, 2], 3, 'x');

  t.deepEqual(newArray, [0, 1, 2, 'x']);
});

test('inserts inside', t => {
  const newArray = insert([0, 1, 2], 1, 'x');

  t.deepEqual(newArray, [0, 'x', 1, 2]);
});
