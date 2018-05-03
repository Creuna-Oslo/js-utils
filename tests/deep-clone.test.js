import test from 'ava';

import clone from '../source/deep-clone';

test('object', t => {
  const original = { a: 1, b: 2, c: { d: 3 } };
  const cloned = clone(original);

  t.plan(2);
  t.deepEqual(cloned, original);
  t.not(cloned, original);
});

test('array', t => {
  const original = [1, 2, 3, [4, 5]];
  const cloned = clone(original);

  t.plan(2);
  t.deepEqual(cloned, original);
  t.not(cloned, original);
});

test('undefined', t => {
  t.is(clone(undefined), undefined);
});
