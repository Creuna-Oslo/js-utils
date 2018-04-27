import test from 'ava';

import clone from '../deep-clone';

test('object', t => {
  const original = { a: 1, b: 2 };
  const cloned = clone(original);

  t.plan(2);
  t.deepEqual(cloned, original);
  t.not(cloned, original);
});

test('arrays', t => {
  const original = [1, 2, 3];
  const cloned = clone(original);

  t.plan(2);
  t.deepEqual(cloned, original);
  t.not(cloned, original);
});
