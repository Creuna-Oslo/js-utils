import test from 'ava';

import toQueryString from '../source/to-query-string';

test('to-query-string', t => {
  t.plan(2);
  t.is(toQueryString({ a: 1, b: '2 3' }, false), '?a=1&b=2 3');
  t.is(
    toQueryString({ a: '1 2', b: '3 4' }, true),
    `?a=${encodeURIComponent('1 2')}&b=${encodeURIComponent('3 4')}`
  );
});
