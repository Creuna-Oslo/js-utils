import test from 'ava';

import replaceQueryParameters from '../source/replace-query-parameters';

test('replace-query-parameters', t => {
  const url = 'https://test.com?a=1&b=2&c=x';
  const obj = { c: 3, d: 4 };

  t.is(replaceQueryParameters(url, obj), 'https://test.com?a=1&b=2&c=3&d=4');
});
