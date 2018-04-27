import stripUndefined from '../strip-undefined';

describe('strip-undefined', () => {
  it('works', () => {
    expect(
      stripUndefined({ a: 1, b: null, c: '', d: undefined })
    ).toMatchObject({ a: 1 });
  });
});
