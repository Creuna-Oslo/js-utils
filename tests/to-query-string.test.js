import test from 'ava';

import toQueryString from '../source/to-query-string';

test('simple', t => {
  t.is(toQueryString({ a: '1 2', b: '3 4' }), '?a=1%202&b=3%204');
});

test('no encoding', t => {
  t.is(toQueryString({ a: 1, b: '2 3' }, false), '?a=1&b=2 3');
});

test('custom prefix', t => {
  t.is(
    toQueryString({ a: '1 2', b: '3 4' }, { prefix: '#' }),
    '#a=1%202&b=3%204'
  );
});

test('no encoding, custom prefix', t => {
  t.is(
    toQueryString({ a: 1, b: '2 3' }, { encode: false, prefix: '#' }),
    '#a=1&b=2 3'
  );
});

test('undefined options', t => {
  t.is(
    toQueryString({ a: 1, b: '2 3' }, { encode: undefined, prefix: undefined }),
    '?a=1&b=2%203'
  );
});
