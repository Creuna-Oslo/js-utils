import clamp from '../clamp';

describe('clamp', () => {
  it('works', () => {
    expect(clamp(1, 0, 2)).toBe(1);
    expect(clamp(1, 2, 3)).toBe(2);
    expect(clamp(4, 0, 1)).toBe(1);
  });
});
