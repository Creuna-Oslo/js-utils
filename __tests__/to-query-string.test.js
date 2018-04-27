import toQueryString from '../to-query-string';

describe('to-query-string', () => {
  it('works', () => {
    expect(toQueryString({ a: 1, b: '2 3' }, false)).toBe('?a=1&b=2 3');
    expect(toQueryString({ a: '1 2', b: '3 4' }, true)).toBe(
      `?a=${encodeURIComponent('1 2')}&b=${encodeURIComponent('3 4')}`
    );
  });
});
