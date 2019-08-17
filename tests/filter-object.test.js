import test from 'ava';

import filterObject from '../source/filter-object';

test('filter-object', t => {
  t.deepEqual({}, filterObject());
  t.deepEqual(
    { a: 1 },
    filterObject({ a: 1, b: 2, c: 3 }, (k, v) => k !== 'b' && v !== 3)
  );
});
