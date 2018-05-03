import test from 'ava';

import stripPropertiesWithValue from '../source/strip-properties-with-value';

test('strip-properties-with-value', t => {
  t.deepEqual(stripPropertiesWithValue({ a: 1, b: 2 }, 1), { b: 2 });
});
