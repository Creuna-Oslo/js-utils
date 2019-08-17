import test from 'ava';

import stripPropertiesWithKeys from '../source/strip-properties-with-keys';

test('strip-properties-with-value', t => {
  t.deepEqual(stripPropertiesWithKeys({ a: 1, b: 2 }, ['a']), { b: 2 });
});
