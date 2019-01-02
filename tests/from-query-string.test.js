import test from 'ava';

import fromQueryString from '../source/from-query-string';

test('default prefix', t => {
  const string = '?a=a&b=b';
  const obj = { a: 'a', b: 'b' };

  t.deepEqual(fromQueryString(string), obj);
});

test('custom prefix', t => {
  const string = '#a=a&b=b';
  const obj = { a: 'a', b: 'b' };

  t.deepEqual(fromQueryString(string, '#'), obj);
});

test('no prefix in input string', t => {
  const string = 'a=a&b=b';
  const obj = { a: 'a', b: 'b' };

  t.deepEqual(fromQueryString(string), obj);
});
