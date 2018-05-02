import test from 'ava';

import stripUndefined from '../strip-undefined';

test('strip-undefined', t => {
  t.deepEqual(
    stripUndefined({
      a: 1,
      b: null,
      c: '',
      d: undefined
    }),
    {
      a: 1,
      b: null,
      c: ''
    }
  );
});
