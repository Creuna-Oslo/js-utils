import test from 'ava';

import isEqual from '../is-equal';

test('boolean', t => {
  t.plan(4);

  t.is(isEqual(true, true), true);
  t.is(isEqual(true, false), false);
  t.is(isEqual(false, false), true);
  t.is(isEqual(false, true), false);
});

test('object', t => {
  const a = { a: 1, b: 2, c: { d: 4 } };
  const b = { a: 1, b: 2, c: { d: 4 } };
  const c = { a: 2, b: 3, c: { d: 5 } };

  t.plan(2);
  t.is(isEqual(a, b), true);
  t.is(isEqual(a, c), false);
});

test('array', t => {
  const a = [1, 2, [3, 4]];
  const b = [1, 2, [3, 4]];
  const c = [2, 3, [4, 5]];

  t.plan(2);
  t.is(isEqual(a, b), true);
  t.is(isEqual(a, c), false);
});

test('number', t => {
  t.plan(2);
  t.is(isEqual(1, 1), true);
  t.is(isEqual(1, 2), false);
});

test('string', t => {
  t.plan(2);
  t.is(isEqual('foo', 'foo'), true);
  t.is(isEqual('bar', 'baz'), false);
});

test('emoji', t => {
  t.plan(2);
  t.is(isEqual('👌🏻', '👌🏻'), true);
  t.is(isEqual('👌🏻', '👏🏻'), false);
});
