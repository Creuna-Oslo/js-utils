import stripPropertiesWithValue from '../strip-properties-with-value';

describe('strip-properties-with-value', () => {
  it('works', () => {
    expect(stripPropertiesWithValue({ a: 1, b: 2 }, 1)).toMatchObject({ b: 2 });
  });
});
