import test from 'ava';

import fromQueryString from '../source/from-query-string';

test('from-query-string', t => {
  const string = '?a=a&b=b';
  const obj = { a: 'a', b: 'b' };

  t.deepEqual(fromQueryString(string), obj);
});
