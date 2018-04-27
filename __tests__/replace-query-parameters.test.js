import replaceQueryParameters from '../replace-query-parameters';

describe('replace-query-parameters', () => {
  it('works', () => {
    const url = 'https://test.com?a=1&b=2&c=x';
    const obj = { c: 3, d: 4 };
    expect(replaceQueryParameters(url, obj)).toBe(
      'https://test.com?a=1&b=2&c=3&d=4'
    );
  });
});
