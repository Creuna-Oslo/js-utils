import test from 'ava';

import isEqual from '../is-equal';

test('is-equal: object', t => {
  const o1 = { a: 1, b: 2, c: { d: 4 } };
  const o2 = { a: 1, b: 2, c: { d: 4 } };

  t.plan(1);
  t.is(isEqual(o1, o2), true);
});

test('is-equal: array', t => {
  const a1 = [1, 2, [3, 4]];
  const a2 = [1, 2, [3, 4]];

  t.plan(1);
  t.is(isEqual(a1, a2), true);
});

test('is-equal: number', t => {
  t.plan(1);
  t.is(isEqual(1, 1), true);
});
