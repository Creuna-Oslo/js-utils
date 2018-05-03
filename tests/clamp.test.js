import test from 'ava';

import clamp from '../source/clamp';

test('clamp', t => {
  t.plan(3);
  t.is(clamp(1, 0, 2), 1);
  t.is(clamp(1, 2, 3), 2);
  t.is(clamp(4, 0, 1), 1);
});
