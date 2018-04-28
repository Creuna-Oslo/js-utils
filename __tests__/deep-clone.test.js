import test from 'ava';

import clone from '../deep-clone';

test('deep-clone: object', t => {
  const original = { a: 1, b: 2, c: { d: 3 } };
  const cloned = clone(original);

  t.plan(2);
  t.deepEqual(cloned, original);
  t.not(cloned, original);
});

test('deep-clone: array', t => {
  const original = [1, 2, 3, [4, 5]];
  const cloned = clone(original);

  t.plan(2);
  t.deepEqual(cloned, original);
  t.not(cloned, original);
});

test('deep-clone: undefined', t => {
  t.plan(1);
  t.is(clone(undefined), undefined);
});
