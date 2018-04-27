import rangeMap from '../range-map';

describe('range-map', () => {
  it('works', () => {
    expect(rangeMap(1, 0, 2, 0, 10)).toBe(5);
    expect(rangeMap(2, 0, 1, 0, 10)).toBe(20);
    expect(rangeMap(-2, 0, 1, 0, 10)).toBe(-20);
  });
});
