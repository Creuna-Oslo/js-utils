import fromQueryString from '../from-query-string';

describe('from-query-string', () => {
  it('works', () => {
    const string = '?a=a&b=b';
    const obj = { a: 'a', b: 'b' };

    expect(fromQueryString(string)).toMatchObject(obj);
  });
});
