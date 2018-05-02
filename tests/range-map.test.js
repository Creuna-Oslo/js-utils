import test from 'ava';

import rangeMap from '../source/range-map';

test('range-map', t => {
  t.plan(3);
  t.is(rangeMap(1, 0, 2, 0, 10), 5);
  t.is(rangeMap(2, 0, 1, 0, 10), 20);
  t.is(rangeMap(-2, 0, 1, 0, 10), -20);
});
